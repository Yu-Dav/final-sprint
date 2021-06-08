import React from 'react'
// import { CellTitle } from './CellTitle'
// import { CellMember } from './CellMember'
// import { CellTag } from './CellTag'
// import { CellStatus } from './CellStatus'
// import { CellPriority } from './CellPriority'
// import { CellCreationLog } from './CellCreationLog'
// import { CellDate } from './CellDate'
import { Draggable } from 'react-beautiful-dnd';
import { DynamicCell } from './DynamicCell'
import { socketService } from '../../services/socketService'
import { utilService } from '../../services/utilService'
import { userService } from '../../services/userService'
import { Snack } from './SnackBar'

// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

export function TaskPreview({ task, group, board, updateBoard, index }) {

    const onRemoveTask = async () => {
        const newBoard = { ...board }
        const groupId = group.id
        const groupIdx = newBoard.groups.findIndex(group => group.id === groupId)
        const taskId = task.id
        const taskIdx = group.tasks.findIndex(task => task.id === taskId)
        const newActivity = {
            id: utilService.makeId(),
            type: 'Task deleted',
            createdAt: Date.now(),
            byMember: userService.getLoggedinUser(),
            task: {
                id: taskId,
                title: task.title
            },
            group: {
                id: groupId,
                title: group.title
            }
        }

        newBoard.groups[groupIdx].tasks.splice(taskIdx, 1)
        newBoard.activities.unshift(newActivity)
        await updateBoard(newBoard)
        await socketService.emit('board updated', newBoard._id);
    }
    return (
        <React.Fragment>
            <Draggable draggableId={task.id} index={index} type="task">
                {provided => (
                    <div className="task-row flex"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <div>
                            <Snack onRemoveTask={onRemoveTask}/>                            
                        </div>
                        <div className="group-color" style={{ backgroundColor: group.style.bgColor }}></div>
                        {board.cellTypes.map((cellType, index) => <DynamicCell key={index} type={cellType} task={task} group={group} board={board} updateBoard={updateBoard} />)}
                                                           {/* adding key to the map above causes an error... why? */}                          
                    </div>
                )}
            </Draggable>
            
        </React.Fragment>
    )
}

