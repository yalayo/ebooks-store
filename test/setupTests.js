import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactGA from 'react-ga'

Enzyme.configure({ adapter: new Adapter() })

ReactGA.initialize('foo', { testMode: true, debug: true });