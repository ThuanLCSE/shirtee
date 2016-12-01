import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class ImagePaper extends React.Component {

  render()
  {
      return (
          <div>
            <Paper style={style} zDepth={3}>
            </Paper>
            <Paper style={style} zDepth={3}>
            </Paper>
            <Paper style={style} zDepth={3}>
            </Paper>
          </div>

      );
  }

};

export default ImagePaper;
