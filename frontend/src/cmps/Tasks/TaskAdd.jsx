import React, { Component } from 'react'
import { utilService } from '../../services/utilService';
import { socketService } from '../../services/socketService';
// import { EditableCmp } from '../EditableCmp'


export class TaskAdd extends Component {
    state = {
        txt: ''
    }
    onAddTask = async ({ target }) => {
        console.log ('var =',this.props.currUser)
        const value = target.value
        if (!value) return
        const newTask = {
            id: utilService.makeId(),
            labelIds: ['101'],
            createdAt: Date.now(),
            title: value,
            timeline: [null, null],
            tags: [],
            status: {
                id: 'sl1',
                title: '',
                color: '#c4c4c4',
            },
            priority: {
                id: 'pl1',
                title: '',
                color: '#c4c4c4',
            },
            members: [],
            comments: [],
            byMember: {//loggedin user
                _id: 'u101',
                username: 'Tal',
                fullname: 'Tal Tarablus',
                imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
            },
        }
        const newBoard = { ...this.props.board }
        const groupId = this.props.group.id
        const groupIdx = newBoard.groups.findIndex(group => group.id === groupId)
        if (!newBoard.groups[groupIdx].tasks || !newBoard.groups[groupIdx].tasks.length) newBoard.groups[groupIdx].tasks = [newTask]
        else newBoard.groups[groupIdx].tasks.push(newTask)
        await this.props.updateBoard(newBoard)
        await socketService.emit('board updated', newBoard._id)
        this.setState({ txt: '' })
    }
    handleUpdate = (ev) => {
        if (ev.key === 'Enter' || ev.type === 'blur') {
            this.setState({ isEditing: false },
                () => {
                    this.onAddTask(ev)
                    ev.target.blur()
                })
        }
        setTimeout(() => {
            this.setState({ isEditing: true })
        }, 500)
    }

    handleChange = ({ target }) => {
        const { name } = target
        const { value } = target
        this.setState({ ...this.state, [name]: value })
    }

    render() {
        const { txt } = this.state
        return (
            <div className="task-add flex">
                <div className="group-color" style={{ backgroundColor: this.props.group.style.bgColor }}></div>
                <input autoComplete="off" className="full" name="txt" type="text" placeholder="+ New Task"
                    onBlur={this.handleUpdate} onKeyUp={this.handleUpdate} value={txt} onChange={this.handleChange} />
                <button className="add" onClick={this.handleUpdate}>Add</button>
            </div>
        )
    }
}
