import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( {
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        backgroundBlendMode: 'darken'
    },
    border: {
        border: 'solid'
    },
    fullHeightCard: {
        height: '100%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        color: '#d5d5d5',
        left: '.5em'
    },
    overlay2: {
        position: 'absolute',
        top: '10px',
        right: 0
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        padding: '0 16px 10px 16px',
        textTransform: 'capitalize'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between'
    }
} );