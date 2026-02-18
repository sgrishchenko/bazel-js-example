import {expect, test} from 'vitest'
import {produceText} from './util'

test('returns Lorem ipsum', () => {
    expect(produceText()).contains('Lorem ipsum')
})
