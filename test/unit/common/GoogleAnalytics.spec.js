import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import '@testing-library/jest-dom/extend-expect'
import ReactGA from 'react-ga'

describe('analytics', () => {
    beforeEach(() => {
        ReactGA.testModeAPI.resetCalls();
    })

    it('correctly sends analytics', () => {
        ReactGA.pageview('/mypage')

        expect(ReactGA.testModeAPI.calls).toEqual([["send", {"hitType": "pageview", "page": "/mypage"}]])
    })
})