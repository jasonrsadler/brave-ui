/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #dee2e6;
  border: solid 1px #dbdfe3;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  padding: 22px 30px 18px 34px;
  margin-bottom: 25px;
` as any

export const StyledLeft = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
` as any

export const StyledRight = styled.div`
  padding: 10px 0 0;
` as any

export const StyledLogo = styled.img`
` as any

export const StyledTitle = styled.div`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  margin: 4px 0 0 11px;
` as any

export const StyledTM = styled.span`
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
  color: #222326;
  vertical-align: text-top;
` as any