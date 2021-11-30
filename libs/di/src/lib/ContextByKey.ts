import { Context, useContext as _useContext } from 'react';

export class ContextByKey {
  constructor(private contextByRef = new Map<string, Context<any>>()) {}
  provideContext<T>(key: string, context: Context<T>) {
    this.contextByRef.set(key, context);
  }
  useContext<T>(key: string): T {
    if (!this.contextByRef.has(key)) {
      throw new Error(
        `Please, call di.provideContext(${key}, ctx: React.Context<T>) before di.useContext(${key}): React.Context<T>`
      );
    }
    return _useContext(this.contextByRef.get(key)!);
  }
}
