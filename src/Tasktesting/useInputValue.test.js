import { renderHook, act } from '@testing-library/react-hooks';
import { useInputValue } from './useInputValue';

describe('when rendered', () => {
    it('test case one, return a initial value', () => {
        const { result } = renderHook(() => useInputValue('Agus Janardana'));

        expect(result.current.value).toEqual('Agus Janardana');
    });

    it('test case two, change a value', () => {
        const { result } = renderHook(() => useInputValue('Agus Janardana'));

        act(() => result.current.onChange({ target: { value: 'Agus Janardana2333' } }));
        expect(result.current.value).toEqual('Agus Janardana2333');
    });

    it('test case three, updating a value', () => {
        const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
            initialValue: { text: 'Agus Janardana' },
        });

        rerender({ text: 'New Agus Janardana' });
        expect(result.current.value).toEqual('New Agus Janardana');
    });
});
