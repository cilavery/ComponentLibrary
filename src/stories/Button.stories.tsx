import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Button} from '../components'

storiesOf('Button', module)
    .add('filled-active-large', () => <Button url="" type="filled" value="Button" size="large"/>)
    .add('ghost-active-large', () => <Button url="" type="ghost" value="Button" size="large"/>)
    .add('text-active-large', () => <Button url="" type="text" value="Text-Button" size="large"/>)

