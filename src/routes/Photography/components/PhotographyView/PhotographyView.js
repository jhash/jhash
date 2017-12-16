import _ from 'lodash'

import './PhotographyView.scss'

import React from 'react'
import { Link } from 'react-router'

import {
  IMAGE_WIDTH_SMALL
} from 'constants/images/images'

import { caToMiPreview } from '../CAtoMIView/CAtoMIView'

const subSectionPreviews = [
  caToMiPreview
]

export class PhotographyView extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render () {
    if (this.props.children) return this.props.children

    return (
      <div className='view--photography'>
        {_.map(subSectionPreviews, (preview, index) => (
          <div className='view--photography__gallery__image-wrapper' key={index}>
            <Link to={preview.linkTo}>
              <img className='view--photography__gallery__image' src={preview.image[IMAGE_WIDTH_SMALL]} />
              <div className='view--photography__gallery__image-title'>{preview.title}</div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default PhotographyView