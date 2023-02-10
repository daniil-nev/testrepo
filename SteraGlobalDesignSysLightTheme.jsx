import React from 'react';

import { createTheme } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';

import ErrorOutline from './public/assets/images/_ErrorOutline.svg';
import WarningAmberOutlined from './public/assets/images/_WarningAmberOutlined.svg';
import InfoOutlined from './public/assets/images/_InfoOutlined.svg';
import CheckCircleOutlined from './public/assets/images/_CheckCircleOutlined.svg';
import CheckBoxOutlineBlank from './public/assets/images/_CheckBoxOutlineBlankOutlined.svg';
import IndeterminateCheckBo from './public/assets/images/_IndeterminateCheckBoxFilled.svg';
import CheckBoxFilled from './public/assets/images/_CheckBoxFilled.svg';

const globalTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {},
  customShadows: {},
});

const questTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiAlert: {
        defaultProps: {
          iconMapping: {
            error: <SvgIcon component={ErrorOutline} />,
            warning: <SvgIcon component={WarningAmberOutlined} />,
            info: <SvgIcon component={InfoOutlined} />,
            info: <SvgIcon component={CheckCircleOutlined} />,
          },
        },
        styleOverrides: {
          filledError: {
            backgroundColor: `rgba(211, 47, 47, 1)`,
            borderRadius: `4px`,
          },
          filledWarning: {
            backgroundColor: `rgba(237, 108, 2, 1)`,
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: `rgba(2, 136, 209, 1)`,
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: `rgba(46, 125, 50, 1)`,
            borderRadius: `4px`,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {},
      },
      MuiButton: {
        styleOverrides: {
          containedSizeLarge: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `15px`,
            letterSpacing: `0.06900000125169754px`,
            textDecoration: `none`,
            lineHeight: `26px`,
            textTransform: `uppercase`,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          containedSizeMedium: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `14px`,
            letterSpacing: `0.056000000834465026px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `uppercase`,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          containedSizeSmall: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `13px`,
            letterSpacing: `0.05980000108480454px`,
            textDecoration: `none`,
            lineHeight: `22px`,
            textTransform: `uppercase`,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          containedPrimary: {
            backgroundColor: `rgba(25, 118, 210, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(21, 101, 192, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedSecondary: {
            backgroundColor: `rgba(156, 39, 176, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(123, 31, 162, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedError: {
            backgroundColor: `rgba(211, 47, 47, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(198, 40, 40, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedSuccess: {
            backgroundColor: `rgba(46, 125, 50, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(27, 94, 32, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedInfo: {
            backgroundColor: `rgba(2, 136, 209, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(1, 87, 155, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          containedWarning: {
            backgroundColor: `rgba(237, 108, 2, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(230, 81, 0, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(0, 0, 0, 0.12)`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSizeMedium: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `14px`,
            letterSpacing: `0.056000000834465026px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `uppercase`,
            padding: `6px 8px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          textSizeLarge: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `15px`,
            letterSpacing: `0.06900000125169754px`,
            textDecoration: `none`,
            lineHeight: `26px`,
            textTransform: `uppercase`,
            padding: `8px 11px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          textSizeSmall: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `13px`,
            letterSpacing: `0.05980000108480454px`,
            textDecoration: `none`,
            lineHeight: `22px`,
            textTransform: `uppercase`,
            padding: `4px 5px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          textPrimary: {
            color: `rgba(25, 118, 210, 1)`,
            '&:hover': {
              backgroundColor: `rgba(25, 118, 210, 0.04)`,
              color: `rgba(25, 118, 210, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSecondary: {
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor: `rgba(156, 39, 176, 0.04)`,
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textError: {
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: `rgba(211, 47, 47, 0.04)`,
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSuccess: {
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor: `rgba(46, 125, 50, 0.04)`,
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textInfo: {
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: `rgba(2, 136, 209, 0.04)`,
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textWarning: {
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor: `rgba(237, 108, 2, 0.04)`,
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSizeLarge: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `15px`,
            letterSpacing: `0.06900000125169754px`,
            textDecoration: `none`,
            lineHeight: `26px`,
            textTransform: `uppercase`,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          outlinedSizeMedium: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `14px`,
            letterSpacing: `0.056000000834465026px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `uppercase`,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          outlinedSizeSmall: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `13px`,
            letterSpacing: `0.05980000108480454px`,
            textDecoration: `none`,
            lineHeight: `22px`,
            textTransform: `uppercase`,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          outlinedPrimary: {
            border: `1px solid rgba(25, 118, 210, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(25, 118, 210, 1)`,
            '&:hover': {
              backgroundColor: `rgba(25, 118, 210, 0.04)`,
              border: `1px solid rgba(25, 118, 210, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(25, 118, 210, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSecondary: {
            border: `1px solid rgba(156, 39, 176, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor: `rgba(156, 39, 176, 0.04)`,
              border: `1px solid rgba(156, 39, 176, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedError: {
            border: `1px solid rgba(211, 47, 47, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: `rgba(211, 47, 47, 0.04)`,
              border: `1px solid rgba(211, 47, 47, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSuccess: {
            border: `1px solid rgba(46, 125, 50, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor: `rgba(46, 125, 50, 0.04)`,
              border: `1px solid rgba(46, 125, 50, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedInfo: {
            border: `1px solid rgba(2, 136, 209, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: `rgba(2, 136, 209, 0.04)`,
              border: `1px solid rgba(2, 136, 209, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedWarning: {
            border: `1px solid rgba(237, 108, 2, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor: `rgba(237, 108, 2, 0.04)`,
              border: `1px solid rgba(237, 108, 2, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          icon: <SvgIcon component={CheckBoxOutlineBlank} />,
          indeterminateIcon: <SvgIcon component={IndeterminateCheckBo} />,
          checkedIcon: <SvgIcon component={CheckBoxFilled} />,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: `rgba(25, 118, 210, 0.04)`,
              borderRadius: `19px`,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            color: `rgba(0, 0, 0, 0.87)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `150%`,
            textTransform: `none`,
            '&.Mui-disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
              fontStyle: `normal`,
              fontFamily: `Roboto`,
              fontWeight: `400`,
              fontSize: `16px`,
              letterSpacing: `0.024000000953674317px`,
              textDecoration: `none`,
              lineHeight: `150%`,
              textTransform: `none`,
            },
          },
          root: {
            marginLeft: '0px',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            width: `24px`,
            height: `24px`,
          },
          fontSizeLarge: {
            width: `35px`,
            height: `35px`,
          },
          fontSizeSmall: {
            width: `20px`,
            height: `20px`,
          },
          fontSizeInherit: {
            width: `16px`,
            height: `16px`,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: `rgba(0, 0, 0, 0.87)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `none`,
          },
          sizeSmall: {
            color: `rgba(0, 0, 0, 0.87)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `none`,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: `rgba(0, 0, 0, 0.6)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `12px`,
            letterSpacing: `0.04800000071525574px`,
            textDecoration: `none`,
            lineHeight: `20px`,
            textTransform: `none`,
            '&.MuiError': {
              color: `rgba(211, 47, 47, 1)`,
              fontStyle: `normal`,
              fontFamily: `Roboto`,
              fontWeight: `400`,
              fontSize: `12px`,
              letterSpacing: `0.04800000071525574px`,
              textDecoration: `none`,
              lineHeight: `20px`,
              textTransform: `none`,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: `rgba(0, 0, 0, 0.6)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `none`,
          },
          sizeSmall: {
            color: `rgba(0, 0, 0, 0.6)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `24px`,
            textTransform: `none`,
          },
        },
      },
    },
  },
  globalTheme
);

export default questTheme;
