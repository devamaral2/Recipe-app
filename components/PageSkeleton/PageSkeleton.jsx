import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from './styled';

const PageSkeleton = () => (
  <Container>
    <div className="body">
      <Skeleton variant="rect" width={355} height={360} />
      <div className="options">
        <Skeleton variant="circle" width={42} height={42} />
        <Skeleton variant="circle" width={42} height={42} />
      </div>
      <Skeleton variant="rect" width={160} height={32} />
      <Skeleton variant="rect" width={160} height={32} />

      <div className="ingredients">
        <Skeleton variant="rect" width={350} height={32} />
        <Skeleton variant="rect" width={350} height={32} />
      </div>
    </div>
  </Container>
);

export default PageSkeleton;
