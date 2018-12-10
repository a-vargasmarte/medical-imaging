import React from 'react';
import Annotation from 'react-image-annotation';

const SimpleAnnotation = ({ imageUrl, alt, annotations, type, annotation, onChange, onSubmit }) => {
    return (
        <Annotation
            src={imageUrl}
            alt={alt}
            annotations={annotations}
            type={type}
            value={annotation}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default SimpleAnnotation;