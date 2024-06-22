import {
  describe, expect, it,
} from 'vitest';
import threadsAndUsersReducer from './reducer';

/**
 * - Testing Scenario for threadsAndUsers
 *
 * - Reducer
 * - should return the initial state when given by unknow action
 * - should return the threadsAndUsers
 */

describe('Testing Scenario for ThreadsandUsers', () => {
  it('should return the initial state when given by unknow action', () => {
    // arrange
    const initState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsAndUsersReducer(initState, action);

    // assert
    expect(nextState).toEqual(initState);
  });
});
