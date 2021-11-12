import React from 'react'
import ControlPanel from './controls/ControlPanel'
import Slider from './slider/Slider'
import Button from './controls/Button'

export default function SoundBar() {
    return (
        <div id="soundbar">
            <Button/>
            <Slider/>
            <ControlPanel/>
        </div>
    )
}
