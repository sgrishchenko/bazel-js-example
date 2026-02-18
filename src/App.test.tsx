import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'
import {App} from "./App";

test('loads and displays greeting', async () => {
    render(<App/>)

    expect(screen.getByRole('heading')).toHaveTextContent("Hello, World!")
})
