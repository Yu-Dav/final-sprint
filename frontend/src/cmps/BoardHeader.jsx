import React, { Component } from 'react'
import { ClickAwayListener } from '@material-ui/core'
import { EditableCmp } from './EditableCmp'
import { ReactComponent as StarSvg } from '../assets/imgs/svg/star.svg'
import { socketService } from '../services/socketService'
import {ReactComponent as User} from '../assets/imgs/avatars/016-user.svg'

import Avatar from '@material-ui/core/Avatar';

export class BoardHeader extends Component {
    state = {
        isExpanded: false
    }

    onUpdateTitle = async ({ target }) => {
        const { name } = target.dataset
        const value = target.innerText
        const newBoard = { ...this.props.board }
        // console.log(`file: BoardHeader.jsx || line 13 || newBoard`, newBoard)
        // Getting the correct board above
        newBoard[name] = value
        await this.props.updateBoard(newBoard)
        socketService.emit('board updated', newBoard._id)
    }

    onAddUser = async (ev) => {
        ev.stopPropagation()
        const newBoard = { ...this.props.board }
        const userId = ev.currentTarget.dataset.id
        const user = this.getUserById(userId)
        newBoard.members.unshift(user)
        await this.props.updateBoard(newBoard)
        socketService.emit('board updated', newBoard._id)
        this.setState({ ...this.state, isExpanded: false })
    }

    
    getOtherMembers=()=> {
        const { board, users } = this.props
        var otherMembers = users.filter(user => {
            let filteredArr = board.members.filter(boardMem => {
                return boardMem._id === user._id
            });
            if (filteredArr.length > 0) return false
            return true
            //`return !length;` will  return false if length > 0
        });
        return otherMembers
    }

    getUserById = (id) => {
        return this.props.users.find(user => user._id === id)
    }

    handleClickAway = () => {
        this.setState({ ...this.state, isExpanded: false })
    }

    onOpenSelector = () => {
        this.setState({ ...this.state, isExpanded: !this.state.isExpanded })
    }

    render = () => {
        const { board, users } = this.props
        const { isExpanded } = this.state
        return (
            <div className="board-header">
                <div className="header-top flex space-between">
                    <div className="title-container flex align-center">
                        <EditableCmp className="title" name="title" value={board.title} updateFunc={this.onUpdateTitle} />

                        <StarSvg className="star-fav" />
                        {/* <button className="btn" onClick={()=> window.location.hash = `/board/${board._id}/map`}>Map</button>
                        <LocationSearchInput/> */}
                    </div>
                    <div className="board-header-btns flex">
                        {/* <User/> */}
                        <button className="btn">Last seen</button>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                        <div className="board-header-btns flex">
                            <button className="btn" onClick={this.onOpenSelector}>Invite / {users.length}</button>
                            {isExpanded && <div className="invite-user">
                                {this.getOtherMembers().map(user => {
                                    return <div data-id={user._id} onClick={this.onAddUser}
                                        className="user-select flex" key={user._id}>
                                        <Avatar alt={user.username} src={user.imgUrl}
                                            style={{ width: '30px', height: '30px' }} /><span>{user.username}</span>
                                    </div>
                                })}
                            </div>}
                        </div>
                        </ClickAwayListener>
                        <button className="btn" onClick={() => window.location.hash = `/board/${board._id}/activity_log`}>Activity</button>
                    </div>
                </div>
                <div className="full subtitle-container">
                    <EditableCmp className="subtitle" name="subtitle" value={board.subtitle} updateFunc={this.onUpdateTitle} />
                </div>
            </div>
        )
    }
}
