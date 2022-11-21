import React from 'react'
import { createUseStyles } from 'react-jss';

const colors = {
  success: '#6da06f',
  error: '#f56260',
};

const useStyles = createUseStyles({
    wrapper: {
      border: ({ type }) => `${colors[type]} solid 1px`,
      marginBottom: 15,
      padding: 15,
      position: 'relative',
      '& h2': {
        color: ({ type }) => colors[type],
        margin: [0, 0, 10, 0],
      }
    }
});
function useStyleHook() {
}

export default useStyleHook
