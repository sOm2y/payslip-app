//@flow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// enable using of expect(wrapper).toContainReact(<SomeComponent/>)
import 'jest-enzyme';

configure({ adapter: new Adapter() });
