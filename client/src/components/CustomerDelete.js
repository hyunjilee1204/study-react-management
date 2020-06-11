import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogAction from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            open:false
        }
    }

    handleClickOpens = () => {
        this.setState({
            open:true
        });
    }

    handleClose = () => {
        this.setState({
            open:false
        })
    }

    deleteCustomer(id){
        const url = '/api/customer/'+id;
        fetch(url, {
            method:'Delete'
        });
        this.props.stateRefresh();
    }
    render(){
        return(
            <div>
                <Button variant="containde" color="secondary" onClick={this.handleClickOpens}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 고객 정보가 삭제 됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogAction>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.state.id)}}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogAction>
                </Dialog>
            </div>
        )
    }

}

export default CustomerDelete;