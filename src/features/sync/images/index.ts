/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from '../../../theme'

import StartImageUrl from './start_icon.svg'
import DefaultImageUrl from './default_icon.svg'
import AddImageUrl from './add_icon.svg'
import RemoveImageUrl from './remove_icon.svg'
import DesktopImageUrl from './desktop_icon.svg'
import MobileImageUrl from './mobile_icon.svg'
import MobileHandImageUrl from './mobile_picture.png'

const iconStyles = `
  margin-top: 3px;
  height: 60px;
`

const deviceStyles = `
  margin-bottom: 20px;
  height: 100px;
`

export const SyncStartIcon = styled<{}, 'img'>('img').attrs({ src: StartImageUrl })`
  max-width: 100%;
`
export const SyncDefaultIcon = styled<{}, 'img'>('img').attrs({ src: DefaultImageUrl })`${iconStyles}`
export const SyncAddIcon = styled<{}, 'img'>('img').attrs({ src: AddImageUrl })`${iconStyles}`
export const SyncRemoveIcon = styled<{}, 'img'>('img').attrs({ src: RemoveImageUrl })`${iconStyles}`
export const SyncDesktopIcon = styled<{}, 'img'>('img').attrs({ src: DesktopImageUrl })`${deviceStyles}`
export const SyncMobileIcon = styled<{}, 'img'>('img').attrs({ src: MobileImageUrl })`${deviceStyles}`
export const SyncMobilePicture = styled<{}, 'img'>('img').attrs({ src: MobileHandImageUrl })`
  max-width: 100%;
  display: block;
`

interface QRCodeProps {
  size: 'normal' | 'small'
}

export const QRCode = styled<QRCodeProps, 'img'>('img')`
  max-width: 100%;
  display: block;
  width: ${p => p.size === 'normal' ? '180px' : '140px'};
`