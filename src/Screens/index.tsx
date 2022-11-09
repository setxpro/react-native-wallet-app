import React, { ReactNode } from 'react';
import { View } from 'react-native';

import * as C from './styles';

export function Container({children}:{children: ReactNode}) {
  return (
    <C.Container>
        {children}
    </C.Container>
  );
}
