import React from 'react';
import { useParams } from 'react-router-dom';
import SealXpertAssessment from './SealXpertAssessment';
import QuickSealingAssessment from './QuickSealingAssessment';

const Assessment = () => {
  const { slug } = useParams();

  if (slug === 'sealxpert-pro') {
    return <SealXpertAssessment />;
  }

  if (slug === 'quick-sealing') {
    return <QuickSealingAssessment />;
  }

  // Fallback: default to Quick Sealing form until dedicated forms exist
  return <QuickSealingAssessment />;
};

export default Assessment;


