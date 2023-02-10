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
    mode: 'dark',
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
            backgroundColor: `rgba(244, 67, 54, 1)`,
            borderRadius: `4px`,
          },
          filledWarning: {
            backgroundColor: `rgba(255, 167, 38, 1)`,
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: `rgba(41, 182, 246, 1)`,
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: `rgba(102, 187, 106, 1)`,
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
            backgroundColor: `rgba(144, 202, 249, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: `rgba(66, 165, 245, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          containedSecondary: {
            backgroundColor: `rgba(206, 147, 216, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: `rgba(171, 71, 188, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          containedError: {
            backgroundColor: `rgba(244, 67, 54, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: `rgba(211, 47, 47, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          containedSuccess: {
            backgroundColor: `rgba(102, 187, 106, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: `rgba(56, 142, 60, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          containedInfo: {
            backgroundColor: `rgba(41, 182, 246, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: `rgba(2, 136, 209, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          containedWarning: {
            backgroundColor: `rgba(255, 167, 38, 1)`,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)`,
            color: `rgba(0, 0, 0, 0.87)`,
            '&:hover': {
              backgroundColor: `rgba(255, 167, 38, 1)`,
              boxShadow: `0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)`,
              color: `rgba(0, 0, 0, 0.87)`,
            },
            '&:disabled': {
              backgroundColor: `rgba(255, 255, 255, 0.12)`,
              color: `rgba(255, 255, 255, 0.3)`,
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
            color: `rgba(144, 202, 249, 1)`,
            '&:hover': {
              backgroundColor: `rgba(144, 202, 249, 0.08)`,
              color: `rgba(144, 202, 249, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          textSecondary: {
            color: `rgba(206, 147, 216, 1)`,
            '&:hover': {
              backgroundColor: `rgba(206, 147, 216, 0.08)`,
              color: `rgba(206, 147, 216, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          textError: {
            color: `rgba(244, 67, 54, 1)`,
            '&:hover': {
              backgroundColor: `rgba(211, 47, 47, 0.04)`,
              color: `rgba(244, 67, 54, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          textSuccess: {
            color: `rgba(102, 187, 106, 1)`,
            '&:hover': {
              backgroundColor: `rgba(102, 187, 106, 0.08)`,
              color: `rgba(102, 187, 106, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          textInfo: {
            color: `rgba(41, 182, 246, 1)`,
            '&:hover': {
              backgroundColor: `rgba(2, 136, 209, 0.08)`,
              color: `rgba(41, 182, 246, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          textWarning: {
            color: `rgba(255, 167, 38, 1)`,
            '&:hover': {
              backgroundColor: `rgba(255, 167, 38, 0.08)`,
              color: `rgba(255, 167, 38, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
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
            border: `1px solid rgba(144, 202, 249, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(144, 202, 249, 1)`,
            '&:hover': {
              backgroundColor: `rgba(144, 202, 249, 0.08)`,
              border: `1px solid rgba(144, 202, 249, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(144, 202, 249, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          outlinedSecondary: {
            border: `1px solid rgba(206, 147, 216, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(206, 147, 216, 1)`,
            '&:hover': {
              backgroundColor: `rgba(206, 147, 216, 0.08)`,
              border: `1px solid rgba(206, 147, 216, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(206, 147, 216, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          outlinedError: {
            border: `1px solid rgba(244, 67, 54, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(244, 67, 54, 1)`,
            '&:hover': {
              backgroundColor: `rgba(211, 47, 47, 0.04)`,
              border: `1px solid rgba(244, 67, 54, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(244, 67, 54, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          outlinedSuccess: {
            border: `1px solid rgba(102, 187, 106, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(102, 187, 106, 1)`,
            '&:hover': {
              backgroundColor: `rgba(102, 187, 106, 0.08)`,
              border: `1px solid rgba(102, 187, 106, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(102, 187, 106, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          outlinedInfo: {
            border: `1px solid rgba(2, 136, 209, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(41, 182, 246, 1)`,
            '&:hover': {
              backgroundColor: `rgba(2, 136, 209, 0.08)`,
              border: `1px solid rgba(2, 136, 209, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(41, 182, 246, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
            },
          },
          outlinedWarning: {
            border: `1px solid rgba(237, 108, 2, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(255, 167, 38, 1)`,
            '&:hover': {
              backgroundColor: `rgba(255, 167, 38, 0.08)`,
              border: `1px solid rgba(237, 108, 2, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(255, 167, 38, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(255, 255, 255, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(255, 255, 255, 0.3)`,
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
              backgroundColor: `rgba(144, 202, 249, 0.08)`,
              borderRadius: `19px`,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            color: `rgba(255, 255, 255, 1)`,
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `400`,
            fontSize: `16px`,
            letterSpacing: `0.024000000953674317px`,
            textDecoration: `none`,
            lineHeight: `150%`,
            textTransform: `none`,
            '&.Mui-disabled': {
              color: `rgba(255, 255, 255, 0.3)`,
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
            color: `rgba(255, 255, 255, 1)`,
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
            color: `rgba(255, 255, 255, 1)`,
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
            color: `rgba(255, 255, 255, 0.7)`,
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
            color: `rgba(255, 255, 255, 0.7)`,
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
            color: `rgba(255, 255, 255, 0.7)`,
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
