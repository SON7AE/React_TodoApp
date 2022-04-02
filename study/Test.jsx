import React from 'react';
import { Checkbox, Typography, Box } from '@mui/material';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: [],
    };
  }

  componentWillUnmount() {}

  componentDidUpdate() {}

  componentDidMount() {
    const list = [];
    for (let i = 0; i < 100; i++) {
      list.push({
        id: i,
        value: `밸류임_${i}`,
      });

      setTimeout(() => {
        this.setState({ dummy: list });
      }, 3000);
    }
  }

  render() {
    const { dummy } = this.state;
    return (
      <div>
        <ul style={{ overflowY: 'auto', maxHeight: '400px' }}>
          {dummy.length === 0 ? (
            <Typography>로딩 주임</Typography>
          ) : (
            dummy.map((item) => {
              return (
                <Box
                  className=''
                  sx={{
                    background: item.id % 2 === 0 ? 'red' : 'green',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox />
                  <Typography key={item.id}>
                    {item.id}:{item.value}
                  </Typography>
                </Box>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default Test;
