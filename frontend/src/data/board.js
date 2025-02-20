import { utilService } from '../services/utilService';
// import { user } from './user';
window.getTime = getTime;
function getTime() {
    return (
        Date.now() -
        utilService.getRandomInt(
            1000 * 60 * 60 * 24 * 5,
            1000 * 60 * 60 * 24 * 10
        )
    );
}


export const boards = [
    {
        _id:'b101',
        title: "Final Sprint",
        subtitle: "Our monday",
        createdAt: 1621940297426,
        description:
            'Planning the final sprint and assigning tasks between team members',
        isFavorite: false,
        createdBy: {
            _id: 'u103',
            fullname: 'Yuval David',
            username: 'Yuval',
            imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
        },
        colors: [
            { id: 'c101', name: 'darkGreen', value: '#037f4c' },
            { id: 'c102', name: 'green', value: '#00c875' },
            { id: 'c103', name: 'yellowGreen', value: '#9cd326' },
            { id: 'c104', name: 'beige', value: '#cab641' },
            { id: 'c105', name: 'yellow', value: '#ffcb00' },
            { id: 'c106', name: 'darkPurple', value: '#784bd1' },
            { id: 'c107', name: 'purple', value: '#a25ddc' },
            { id: 'c108', name: 'turquoise', value: '#0086BE' },
            { id: 'c109', name: 'blue', value: '#579bfc' },
            { id: 'c110', name: 'lightBlue', value: '#66ccff' },
            { id: 'c111', name: 'darkRed', value: '#bb3354' },
            { id: 'c112', name: 'red', value: '#e2445c' },
            { id: 'c113', name: 'darkOrange', value: '#ff642e' },
            { id: 'c114', name: 'orange', value: '#fdab3d' },
            { id: 'c115', name: 'brown', value: '#7f5347' },
            { id: 'c116', name: 'grey', value: '#c4c4c4' },
            { id: 'c117', name: 'darkGrey', value: '#808080' },
        ],
        tags: [
            { id: 't101', title: '#starting', color: '#61bd4f' },
            { id: 't102', title: '#problem', color: '#e2445c' },
            { id: 't103', title: '#development', color: '#579bfc' },
            { id: 't104', title: '#production', color: '#a25ddc' },
        ],
        priorityLabels: [
            { id: 'pl1', title: 'High', color: '#e2445c' },
            { id: 'pl2', title: 'Medium', color: '#a25ddc' },
            { id: 'pl3', title: 'Low', color: '#579bfc' },
            { id: 'pl4', title: '', color: '#c4c4c4' },
        ],
        statusLabels: [
            { id: 'sl1', title: 'Done', color: '#00c875' },
            { id: 'sl2', title: 'Working on it', color: '#fdab3d' },
            { id: 'sl3', title: 'Stuck', color: '#ff642e' },
            { id: 'sl4', title: 'On hold', color: '#175a63' },
            { id: 'sl5', title: '', color: '#c4c4c4' },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Noga Jacobi',
                username: 'Noga',
                password: 'noga1234',
                imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                mentions: [{ id: 'm101', boardId: 'm101', taskId: 't101' }],
            },
            {
                _id: 'u102',
                fullname: 'Dafna Bashan ',
                username: 'Dafna',
                password: 'dafna1234',
                imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                mentions: [{ id: 'm101', boardId: 'm101', taskId: 't101' }],
            },
            {
                _id: 'u103',
                fullname: 'Yuval David',
                username: 'Yuval',
                password: 'yuval1234',
                imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                mentions: [{ id: 'm101', boardId: 'm101', taskId: 't101' }],
            },
            {
                _id: 'u104',
                fullname: 'Basya Coding',
                username: 'Basya',
                password: 'basya1234',
                imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                mentions: [{ id: 'm101', boardId: 'm101', taskId: 't101' }],
            },
        ],
        groups: [
            {
                id: 'g103',
                style: { bgColor: '#784bd1' },
                title: 'Pre Operation',
                tasks: [
                    {
                        id: 'g3t101',
                        labelIds: ['101'],
                        createdAt: 1621924680977,
                        timeline: [null, null],
                        title: 'git + initial files setup + initial push/pull',
                        tags: [
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: { id: 'sl1', title: 'Done', color: '#00c875' },
                        priority: { id: 'pl4', title: '', color: '#c4c4c4' },
                        members: [
                            {
                                _id: 'u103',
                                fullname: 'Yuval David',
                                username: 'Yuval',
                                imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                            },
                            {
                                _id: 'u104',
                                fullname: 'Basya coding',
                                username: 'Basya',
                                imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm7',
                                txt: 'open a new repository',
                                createdAt: 1622170515811,
                                byMember: {
                                    _id: 'u104',
                                    fullname: 'Basya coding',
                                    username: 'Basya',
                                    imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                                },
                                taskId: 'g3t101',
                                groupId: 'g103',
                            },
                        ],
                        byMember: {
                            _id: 'u104',
                            fullname: 'Basya coding',
                            username: 'Basya',
                            imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                        },
                    },
                ],
            },
            {
                id: 'g101',
                style: { bgColor: '#26de81' },
                title: 'Features',
                tasks: [
                    {
                        id: 'g1t101',
                        labelIds: ['101'],
                        createdAt: 1621940297426,
                        timeline: [null, null],
                        title: 'Content Editable',
                        tags: [
                            {
                                id: 't104',
                                title: '#production',
                                color: '#a25ddc',
                            },
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: { id: 'sl1', title: 'Done', color: '#00c875' },
                        priority: {
                            id: 'pl1',
                            title: 'High',
                            color: '#e2445c',
                        },
                        members: [
                            {
                                _id: 'u102',
                                fullname: 'Dafna Bashan',
                                username: 'Dafna',
                                imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm1',
                                txt: 'https://www.npmjs.com/package/react-contenteditable',
                                createdAt: 1621893062456,
                                byMember: {
                                    _id: 'u102',
                                    fullname: 'Dafna Bashan',
                                    username: 'Dafna',
                                    imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                                },
                                taskId: 'g1t101',
                                groupId: 'g101',
                            },
                        ],
                        byMember: {
                            _id: 'u102',
                            fullname: 'Dafna Bashan',
                            username: 'Dafna',
                            imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                        },
                    },
                    {
                        id: 'g2t101',
                        labelIds: ['101'],
                        createdAt: 1621940297426,
                        timeline: [null, null],
                        title: 'App flow - from home page to boards to selected boards',
                        tags: [
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: {
                            id: 'sl2',
                            title: 'Working on it',
                            color: '#fdab3d',
                        },
                        priority: {
                            id: 'pl2',
                            title: 'Medium',
                            color: '#a25ddc',
                        },
                        members: [
                            {
                                _id: 'u101',
                                fullname: 'Noga Jacobi',
                                username: 'Noga',
                                imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Dafna Bashan',
                                username: 'Dafna',
                                imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                            },
                            {
                                _id: 'u103',
                                fullname: 'Yuval David',
                                username: 'Yuval',
                                imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm4',
                                txt: 'cmps: home, board app, login, signup',
                                createdAt: 1621854790537,
                                byMember: {
                                    _id: 'u103',
                                    fullname: 'Yuval David',
                                    username: 'Yuval',
                                    imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                                },
                                taskId: 'g2t101',
                                groupId: 'g101ְ',
                            },
                        ],
                        byMember: {
                            _id: 'u103',
                            fullname: 'Yuval David',
                            username: 'Yuval',
                            imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                        },
                    },
                    {
                        id: 'g1t103',
                        labelIds: ['101'],
                        createdAt: 1621615250330,
                        timeline: [null, null],
                        title: 'Drag and Drop',
                        tags: [
                            { id: 't102', title: '#problem', color: '#e2445c' },
                        ],
                        status: {
                            id: 'sl2',
                            title: 'Working on it',
                            color: '#fdab3d',
                        },
                        priority: {
                            id: 'pl2',
                            title: 'Medium',
                            color: '#a25ddc',
                        },
                        members: [
                            {
                                _id: 'u103',
                                fullname: 'Yuval David',
                                username: 'Yuval',
                                imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm3',
                                txt: 'Drag and Drop of tasks - https://www.npmjs.com/package/react-beautiful-dnd',
                                createdAt: 1621818253508,
                                byMember: {
                                    _id: 'u103',
                                    fullname: 'Yuval David',
                                    username: 'Yuval',
                                    imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                                },
                                taskId: 'g1t103',
                                groupId: 'g101',
                            },
                        ],
                        byMember: {
                            _id: 'u103',
                            fullname: 'Yuval David',
                            username: 'Yuval',
                            imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                        },
                    },
                    {
                        id: 'g1t102',
                        labelIds: ['101'],
                        createdAt: 1621924680977,
                        timeline: [null, null],
                        title: 'Date Range Picker',
                        tags: [
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: {
                            id: 'sl4',
                            title: 'On hold',
                            color: '#175a63',
                        },
                        priority: { id: 'pl3', title: 'Low', color: '#579bfc' },
                        members: [
                            {
                                _id: 'u103',
                                fullname: 'Yuval David',
                                username: 'Yuval',
                                imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm2',
                                txt: 'Date range - https://reactdatepicker.com/#example-date-range',
                                createdAt: 1622203475437,
                                byMember: {
                                    _id: 'u103',
                                    fullname: 'Yuval David',
                                    username: 'Yuval',
                                    imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                                },
                                taskId: 'g1t102',
                                groupId: 'g101',
                            },
                        ],
                        byMember: {
                            _id: 'u103',
                            fullname: 'Yuval David',
                            username: 'Yuval',
                            imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                        },
                    },
                ],
            },
            {
                id: 'g102',
                style: { bgColor: '#bb3354' },
                title: 'UX/UI',
                tasks: [
                    {
                        id: 'g2t102',
                        labelIds: ['101'],
                        createdAt: 1621940297426,
                        timeline: [null, null],
                        title: 'Popup modals and Material UI drawer',
                        tags: [
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: {
                            id: 'sl2',
                            title: 'Working on it',
                            color: '#fdab3d',
                        },
                        priority: {
                            id: 'pl1',
                            title: 'High',
                            color: '#e2445c',
                        },
                        members: [
                            {
                                _id: 'u101',
                                fullname: 'Noga Jacobi',
                                username: 'Noga',
                                imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Dafna Bashan',
                                username: 'Dafna',
                                imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm5',
                                txt: 'check this website: https://material-ui.com/components/modal/',
                                createdAt: 1621812240527,
                                byMember: {
                                    _id: 'u102',
                                    fullname: 'Dafna Bashan',
                                    username: 'Dafna',
                                    imgUrl: 'https://i.ibb.co/qMmQnJL/image.jpg',
                                },
                                taskId: 'g2t102',
                                groupId: 'g102',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Noga Jacobi',
                            username: 'Noga',
                            imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                        },
                    },
                    {
                        id: 'g2t103',
                        labelIds: ['101'],
                        createdAt: 1621615250330,
                        timeline: [null, null],
                        title: 'Add CSS transition/React animations when components changes',
                        tags: [
                            {
                                id: 't103',
                                title: '#development',
                                color: '#579bfc',
                            },
                            {
                                id: 't101',
                                title: '#starting',
                                color: '#61bd4f',
                            },
                        ],
                        status: {
                            id: 'sl2',
                            title: 'Working on it',
                            color: '#fdab3d',
                        },
                        priority: { id: 'pl3', title: 'Low', color: '#579bfc' },
                        members: [
                            {
                                _id: 'u104',
                                fullname: 'Basya coding',
                                username: 'Basya',
                                imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm6',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1622086963720,
                                byMember: {
                                    _id: 'u104',
                                    fullname: 'Basya coding',
                                    username: 'Basya',
                                    imgUrl: 'https://i.ibb.co/S6XczhC/qb.png',
                                },
                                taskId: 'g2t103',
                                groupId: 'g2t103',
                            },
                        ],
                        byMember: {
                            _id: 'u104',
                            fullname: 'Basya coding',
                            username: 'Basya',
                            imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                        },
                    },
                    {
                        id: 'PIw43',
                        labelIds: ['101'],
                        createdAt: 1622665739062,
                        title: 'Timeline should show num of days left',
                        timeline: [null, null],
                        tags: [],
                        status: { id: 'sl1', title: '', color: '#c4c4c4' },
                        priority: { id: 'pl1', title: '', color: '#c4c4c4' },
                        members: [
                            {
                                _id: 'u101',
                                fullname: 'Noga Jacobi',
                                username: 'Noga',
                                imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                            },
                        ],
                        comments: [],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Noga Jacobi',
                            username: 'Noga',
                            imgUrl: 'https://i.ibb.co/VD7WqLY/noga.jpg',
                        },
                    },
                ],
            },
        ],
        activities: [
            {
                id: 'a101',
                type: 'Changed title',
                createdAt: 1622089520817,
                byMember: {
                    _id: 'u104',
                    fullname: 'Basya Coding',
                    username: 'Basya',
                    imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                },
                task: {
                    id: 'g3t101',
                    title: 'git + initial files setup + initial push/pull',
                },
                group: { id: 'g102', title: 'UX/UI' },
            },
            {
                id: 'a102',
                type: 'Changed status',
                createdAt: 1621983948629,
                byMember: {
                    _id: 'u104',
                    fullname: 'Basya Coding',
                    username: 'Basya',
                    imgUrl: 'https://i.ibb.co/H2SxZc2/basya.jpg',
                },
                task: {
                    id: 'g3t101',
                    title: 'git + initial files setup + initial push/pull',
                },
                group: { id: 'g102', title: 'UX/UI' },
            },
            {
                id: 'a103',
                type: 'Deleted',
                createdAt: 1622010043529,
                byMember: {
                    _id: 'u103',
                    fullname: 'Yuval David',
                    username: 'Yuval',
                    imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                },
                task: {
                    id: 'g3t106',
                    title: 'git + initial files setup + initial push/pull',
                },
                group: { id: 'g101', title: 'Features' },
            },
            {
                id: 'a104',
                type: 'Created',
                createdAt: 1622155727123,
                byMember: {
                    _id: 'u103',
                    fullname: 'Yuval David',
                    username: 'Yuval',
                    imgUrl: 'https://i.ibb.co/GFbDjJx/yuval.jpg',
                },
                task: { id: 'g1t103', title: 'Drag and Drop' },
                group: { id: 'g101', title: 'Features' },
            },
        ],
    },
];
