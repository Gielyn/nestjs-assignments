import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

// Assignment1 - Fibonacci Sequence Generator
@Get('fibonacci/:n')
getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    if (num <= 0) return { error: 'Please provide a positive number.' };

    const sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return { sequence: sequence.slice(0, num) };
}
}
