import React, { Component } from 'react'
import { ActivityLog } from './ActivityLog'
import { EditableCmp } from '../EditableCmp'
import { Updates } from './Updates'
import { userService } from '../../services/userService.js'
import { utilService } from '../../services/utilService.js'
import { connect } from 'react-redux'
import { loadBoard, updateBoard } from '../../store/actions/boardActions'
import { ReactComponent as CrossSvg } from '../../assets/imgs/svg/cross.svg'
import { ClickAwayListener } from '@material-ui/core'

export class _ActivityModal extends Component {

    state = {
        task: null,
        content: 'updates',
        currUser: null
    }
    guest = {
        _id: utilService.makeId(),
        fullname: 'Guest',
        username: 'Guest',
        imgUrl: '../assets/imgs/db.png', // change this to a better photo
    }
    async componentDidMount() {
        const boardId = this.props.match.params.boardId
        const currUser = userService.getLoggedinUser() ?? this.guest
        await this.props.loadBoard(boardId)
        const taskId = this.props.match.params.taskId
        if (!taskId) return
        this.loadTask(taskId)
        this.setState({ ...this.state, currUser })
    }

    loadTask = async (taskId) => {
        const groupId = this.props.match.params.groupId
        const { currBoard } = this.props
        // console.log('props', this.props);
        const group = currBoard.groups.find(group => group.id === groupId)
        const task = group.tasks.find(task => task.id === taskId)
        this.setState({ task });
    }
    onUpdateTaskTitle = ({ target }) => {
        const value = target.innerText
        if (!value) value = 'New task'
        const updatedTask = { ...this.state.task, title: value }
        this.onUpdateTask(updatedTask)
    }
    onUpdateTask = (updatedTask, groupId = null) => {
        const { currBoard } = this.props
        const newBoard = { ...currBoard }
        const taskId = this.props.match.params.taskId
        if (!groupId) groupId = this.props.match.params.groupId
        const groupIdx = newBoard.groups.findIndex(group => group.id === groupId)
        //group is undefind
        const group = newBoard.groups.find(group => group.id === groupId)
        const taskIdx = group.tasks.findIndex(task => task.id === taskId)
        newBoard.groups[groupIdx].tasks.splice(taskIdx, 1, updatedTask)
        this.props.updateBoard(newBoard)
      //  await socketService.emit('comment was added', newBoard._id);
    }

    handleClickAway = () => {
        window.location.hash = `/board/${this.props.currBoard._id}`
    }

    render() {
        const { content, task, currUser } = this.state
        const { currBoard } = this.props
        const {groupId} = this.props.match.params
        if (!currBoard) return <div className="activity-modal">loading</div>
        return (
         
            <ClickAwayListener onClickAway={this.handleClickAway}>
            <div className="activity-modal">
                <div onClick={() => window.location.hash = `/board/${currBoard._id}`}><CrossSvg className="cross-svg"/></div>
                {!task && <div className="board-title">{currBoard.title}</div>}
                {task &&
                    <div className="flex">
                        <EditableCmp value={task.title} updateFunc={this.onUpdateTaskTitle} />
                        {/* <span>avatars</span> */} 
                    </div>}
                <div className="sections flex">
                    <div className={content === 'updates' ? 'active': ''} onClick={() => { this.setState({ ...this.state, content: 'updates' }) }}>Updates</div>
                    <div className={content === 'activity' ? 'active': ''} onClick={() => { this.setState({ ...this.state, content: 'activity' }) }}>Activity Log</div>
                </div>
                <div>
                    {content === 'updates' && currBoard && <Updates currUser={currUser} task={task} groupId={groupId} board={currBoard} onUpdateTask={this.onUpdateTask} />}
                    {content === 'activity' && <ActivityLog task={task} board={currBoard} />}
                </div>
            </div>
            </ClickAwayListener>
        
        )
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boardModule.boards,
        currBoard: state.boardModule.currBoard,
        filterBy: state.boardModule.filterBy
    }
}
const mapDispatchToProps = {
    loadBoard,
    updateBoard

}

export const ActivityModal = connect(mapStateToProps, mapDispatchToProps)(_ActivityModal)