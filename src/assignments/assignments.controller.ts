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

// Assignment2 - Prime Number identifier
@Get('prime/:number')
  isPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    if (num <= 1 || isNaN(num)) return { isPrime: false };

    const isPrime = ![...Array(Math.floor(Math.sqrt(num)) - 1).keys()]
        .map(i => i + 2)
        .some(i => num % i === 0);

    return { isPrime };
  }
}
