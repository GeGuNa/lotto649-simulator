import React from 'react';
import { Card, CardContent, CardHeader, Divider, Stack, Typography } from '@mui/material';
import { LotteryDraw } from 'LotteryDraw';
import { WinningDrawNumber } from './WinningDrawNumber';

export interface WinningDrawProps {
    draw: LotteryDraw | null;
}

export const WinningDraw: React.FC<WinningDrawProps> = (props: WinningDrawProps) => {

    return (
    <Card>
        <CardHeader title="Winning draw" />
        <Divider />
        <CardContent>
        {props.draw ? (
            <Stack direction="row" gap={2} flexWrap="wrap">
                <Stack direction="row" gap={2} alignItems="center">
                    {props.draw.numbers.map((number) => (
                        <WinningDrawNumber number={number} />
                    ))}
                </Stack>
                <Stack direction="row" gap={2} alignItems="center">
                    <Typography variant="body1">Bonus</Typography>
                    <WinningDrawNumber number={props.draw.bonus} />
                </Stack>
            </Stack>
        ):(
            <Typography variant='body1'>Start simulation to draw</Typography>
        )}
        </CardContent>
    </Card>
    )
}