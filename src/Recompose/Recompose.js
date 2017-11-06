import React from 'react'
import { defaultProps ,renameProps  , compose ,withProps , flattenProp , withState , withHandlers , mapProps} from 'recompose'


const enhance = defaultProps({
    counter : 0
})

const enhance1 = renameProps({
    counter: 'xcounter'
})

const finalenhancer = compose (
    enhance,
    enhance1,
    withProps({
        object: { a: 'a', b: 'b' },
        c: 'c'
    }),
    mapProps(({object ,c }) =>{
        return{
            object : {
                a: object.a.toUpperCase(),
                b : object.b.toUpperCase(),
                c: c.toUpperCase()
            }
        }
    }),
    flattenProp('object'),
    withState('counter', 'counterUpdater' , 0),
    withHandlers({
        increment : ({counterUpdater}) => () =>counterUpdater(n=>n+1 ),
        decrement : ({counterUpdater}) => () =>counterUpdater(n=>n-1 )

    })
)


const Recom  = ({xcounter , a,b,c,counter,decrement,increment,...rest}) => {
    return(
        <div>
        <h1>Hello first component {counter}</h1>
        <h1> {a} {b} {c}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
            )
}

export default finalenhancer(Recom);