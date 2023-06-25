import { render, screen, fireEvent, userEvent, getByDisplayValue } from '@testing-library/react';
import React from "react";
import InputForm from './InputForm';

describe("Test for InputForm", () => {

    test('renders input element for getting user input', () => {
        const {getByRole} = render(<InputForm />);
        const input =  getByRole('date-input');
        expect(input).toBeInTheDocument();
      });
    
      test('renders button element for submitting the user input', () => {
        const {getByRole} = render(<InputForm />);
        const button =  getByRole('date-submit');
        expect(button).toBeInTheDocument();
      });

      test('button element is enabled when user input is not empty', () => {
        const {getByText, getByRole} = render(<InputForm />);
        const input =  getByRole('date-input');
        fireEvent.change(input, {target: {value: '2020-05-24'}})
        const button =  getByText(/Show/i);
        expect(button).not.toBeDisabled()
      });

      test('button element is disabled when user input is empty', () => {
        const {getByText, getByRole} = render(<InputForm />);
        const input =  getByRole('date-input');
        fireEvent.change(input, {target: {value: ''}})
        const button =  getByText(/Show/i);
        expect(button).toBeDisabled()
      });

      //below text case is yet to be completed......so skipping it for now using xtest
      xtest('showCalendar state is changed to true after user submits the input', () => {
        const {getByText, getByRole} = render(<InputForm />);
        const input =  getByRole('date-input');
        const show = getByText('Show')
        fireEvent.change(input, {target: {value: '2020-05-23'}});
        fireEvent.click(show);
        // const handleClick = jest.spyOn(React, "useState");
        // handleClick.mockImplementation(showCalendar => [showCalendar, setShowCalendar]);
        // const calendar = screen.getByDisplayValue("May");
        // console.log("state", input, show);
        // expect(setShowCalendar).toHaveBeenCalledWith(true);
        // expect(setShowCalendar).toBeCalled();
        // expect(state('showCalendar')).toBe(true);
      });
});