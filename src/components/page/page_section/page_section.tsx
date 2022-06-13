/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, HTMLAttributes } from 'react';
import { CommonProps } from '../../common';

import { _EuiPageRestrictWidth } from '../_restrict_width';
import { _EuiPageBottomBorder } from '../_bottom_border';

import { useEuiTheme } from '../../../services';
import {
  ALIGNMENTS,
  euiPageSectionStyles,
  euiPageSection__width,
} from './page_section.styles';

import {
  useEuiPaddingCSS,
  useEuiBackgroundColorCSS,
  EuiPaddingSize,
  _EuiBackgroundColor,
} from '../../../global_styling';

export type EuiPageSectionProps = CommonProps &
  _EuiPageRestrictWidth &
  _EuiPageBottomBorder & {
    /**
     * Background color of the section;
     * Usually a lightened form of the brand colors
     */
    color?: _EuiBackgroundColor;
    /**
     * Padding for all four sides
     */
    paddingSize?: EuiPaddingSize;
    /**
     * Horizontal and/or vertical alignment of the section contents
     */
    alignment?: typeof ALIGNMENTS[number];
    /**
     * When true the panel will grow in height to fill container if parent is a flex group
     */
    grow?: boolean;
    /**
     * Passed down to the div wrapper of the section contents
     */
    contentProps?: HTMLAttributes<HTMLDivElement>;
  } & Omit<HTMLAttributes<HTMLDivElement>, 'color'>;

export const EuiPageSection: FunctionComponent<EuiPageSectionProps> = ({
  children,
  alignment = 'top',
  restrictWidth = false,
  bottomBorder,
  paddingSize = 'l',
  color = 'transparent',
  grow = false,
  contentProps,
  ...rest
}) => {
  const useTheme = useEuiTheme();
  const styles = euiPageSectionStyles(useTheme);
  const inlinePadding = useEuiPaddingCSS('horizontal');
  const blockPadding = useEuiPaddingCSS('vertical');
  const colors = useEuiBackgroundColorCSS();
  const width = euiPageSection__width(
    restrictWidth as _EuiPageRestrictWidth,
    alignment
  );

  const cssStyles = [
    styles.euiPageSection,
    grow && styles.grow,
    inlinePadding[paddingSize],
    bottomBorder === 'extended' && styles.border,
    alignment && styles[alignment],
    colors[color],
  ];

  const cssWidthStyles = [
    width,
    blockPadding[paddingSize],
    bottomBorder === true && styles.border,
  ];

  return (
    <div css={cssStyles} {...rest}>
      <div css={cssWidthStyles} {...contentProps}>
        {children}
      </div>
    </div>
  );
};
