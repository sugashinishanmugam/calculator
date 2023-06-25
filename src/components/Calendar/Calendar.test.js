import { render, screen, fireEvent, userEvent, getByDisplayValue } from '@testing-library/react';
import React from "react";
import Calendar from './Calendar';

describe("Test for Calendar", () => {
    test("Should render calendar on the UI by accepting dateValue as prop ", () => {
        const {getByTestId} = render(<Calendar dateValue={"2023-06-25"}/>);
        expect(getByTestId("Calendar")).toBeInTheDocument();
    });

    test("should highlight the entered date in the calendar", () => {
        const {getByTestId} = render(<Calendar dateValue={"2023-06-25"}/>);
        expect(getByTestId("highlighted_date")).toHaveTextContent("25");
    });
});