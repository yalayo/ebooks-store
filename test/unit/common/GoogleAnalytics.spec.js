import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import ReactGA from 'react-ga'

describe('analytics', () => {
    beforeEach(() => {
        ReactGA.testModeAPI.resetCalls();
    });

    it('correctly sends analytics', () => {
        ReactGA.ga('send', 'pageview', '/mypage')

        expect(ReactGA.testModeAPI.calls).toEqual([
            ['create', 'foo', 'auto'],
            ['send', 'pageview', '/mypage']
        ]);
      });
})