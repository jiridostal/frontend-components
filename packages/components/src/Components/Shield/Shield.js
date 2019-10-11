import { QuestionIcon, SecurityIcon } from '@patternfly/react-icons';
import propTypes from 'prop-types';
import React from 'react';
import { colorList, impactList } from './consts';

const Shield = ({ impact, hasLabel, size }) => {
    const unknownLabel = 'Unknown';
    const attributes = impactList[impact] || { title: unknownLabel, color: colorList.default };
    const badge = impactList[impact] ? (
        <SecurityIcon aria-hidden="false" aria-label={attributes.title} size={size} color={attributes.color} />
    ) : (
        <QuestionIcon aria-hidden="false" aria-label={unknownLabel} size={size} color={colorList.default} />
    );

    return (
        <span>
            {badge} {hasLabel && attributes.title}
        </span>
    );
};

Shield.defaultProps = {
    impact: 'N/A',
    hasLabel: false,
    size: 'sm'
};

Shield.propTypes = {
    impact: propTypes.oneOfType([ propTypes.string, propTypes.number ]),
    hasLabel: propTypes.bool,
    size: propTypes.string, // sm, md, lg and xl,
    label: propTypes.bool
};

export default Shield;
