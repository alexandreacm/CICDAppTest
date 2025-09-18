import { render, screen } from "@testing-library/react-native";
import CustomText from "../../src/components/CustomText";

describe('<CustomText />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<CustomText isDarkMode={false}>Hello World</CustomText>);
        const textElement = getByText('Hello World');
        expect(textElement).toBeTruthy();
    });

    it('Should render snapshot correctly', () => {
        const tree = render(<CustomText isDarkMode={false}>Hello World</CustomText>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('Should render text with dark mode styles', () => {
        render(<CustomText isDarkMode={true}>Welcome</CustomText>);

        screen.getByText('Welcome');
    })
});