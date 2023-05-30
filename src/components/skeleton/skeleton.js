import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox='0 0 280 460'
    backgroundColor='#cfcece'
    foregroundColor='#ffffff'
    {...props}
  >
    <circle cx='140' cy='140' r='120' />
    <rect x='38' y='292' rx='6' ry='6' width='207' height='18' />
    <rect x='0' y='321' rx='14' ry='14' width='280' height='85' />
    <rect x='55' y='459' rx='0' ry='0' width='2' height='9' />
    <rect x='2' y='422' rx='5' ry='5' width='131' height='38' />
    <rect x='147' y='422' rx='5' ry='5' width='131' height='38' />
  </ContentLoader>
)

export default Skeleton
