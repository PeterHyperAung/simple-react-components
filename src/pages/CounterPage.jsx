import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SAVE_VALUE_TO_ADD = 'save-value-to-add';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT: return {
            ...state,
            count: state.count + 1
        }
        case DECREMENT_COUNT: return {
            ...state,
            count: state.count - 1
        }
        case CHANGE_VALUE_TO_ADD: return {
            ...state,
            valueToAdd: action.payload
        }
        case SAVE_VALUE_TO_ADD: return {
            ...state,
            count: state.count + action.payload,
            valueToAdd: 0
        }
        default: 
            return state;
    }
}


const CounterPage = ({initialCount}) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    // const increment = () => setCount(prev => prev + 1);

    // const decrement = () => setCount(prev => prev - 1);

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd)
        dispatch({type: SAVE_VALUE_TO_ADD, payload: state.valueToAdd })
    }

    return (
        <Panel className="m-3 w-[95%]">
            <h1>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={() => dispatch({type: INCREMENT_COUNT})}>
                    Increment
                </Button>
                <Button onClick={() => dispatch({type: DECREMENT_COUNT})}>
                    Decrement
                </Button>
            </div>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Add a lot!</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage