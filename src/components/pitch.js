import React from 'react';
import WayPoint from 'react-waypoint';
import typer from 'typer-js';

const Pitch = () => {
    
//    let trigger = 0;
//    
//    function updateTrigger () {
//        trigger = 1;
//    }
    
//    function triggerTyper () {
//        if (trigger === 1){
//            return ''
//        }
//    }
    
    typer('.pitch')
      .line('This function roolz.')
      .back(5)
      .continue('ules!')
            
    
    return (
        <div className="row">
            <div className="pitch">
                    
            </div>
        </div>
        
    );
}

export default Pitch;