
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Scan
 * 
 */
export type Scan = $Result.DefaultSelection<Prisma.$ScanPayload>
/**
 * Model BannedPlayer
 * 
 */
export type BannedPlayer = $Result.DefaultSelection<Prisma.$BannedPlayerPayload>
/**
 * Model ScanResult
 * 
 */
export type ScanResult = $Result.DefaultSelection<Prisma.$ScanResultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Scans
 * const scans = await prisma.scan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Scans
   * const scans = await prisma.scan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scan`: Exposes CRUD operations for the **Scan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scans
    * const scans = await prisma.scan.findMany()
    * ```
    */
  get scan(): Prisma.ScanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bannedPlayer`: Exposes CRUD operations for the **BannedPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BannedPlayers
    * const bannedPlayers = await prisma.bannedPlayer.findMany()
    * ```
    */
  get bannedPlayer(): Prisma.BannedPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanResult`: Exposes CRUD operations for the **ScanResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanResults
    * const scanResults = await prisma.scanResult.findMany()
    * ```
    */
  get scanResult(): Prisma.ScanResultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Scan: 'Scan',
    BannedPlayer: 'BannedPlayer',
    ScanResult: 'ScanResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scan" | "bannedPlayer" | "scanResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Scan: {
        payload: Prisma.$ScanPayload<ExtArgs>
        fields: Prisma.ScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findFirst: {
            args: Prisma.ScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          findMany: {
            args: Prisma.ScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          create: {
            args: Prisma.ScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          createMany: {
            args: Prisma.ScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          delete: {
            args: Prisma.ScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          update: {
            args: Prisma.ScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          deleteMany: {
            args: Prisma.ScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>[]
          }
          upsert: {
            args: Prisma.ScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanPayload>
          }
          aggregate: {
            args: Prisma.ScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScan>
          }
          groupBy: {
            args: Prisma.ScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanCountArgs<ExtArgs>
            result: $Utils.Optional<ScanCountAggregateOutputType> | number
          }
        }
      }
      BannedPlayer: {
        payload: Prisma.$BannedPlayerPayload<ExtArgs>
        fields: Prisma.BannedPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannedPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannedPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          findFirst: {
            args: Prisma.BannedPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannedPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          findMany: {
            args: Prisma.BannedPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>[]
          }
          create: {
            args: Prisma.BannedPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          createMany: {
            args: Prisma.BannedPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannedPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>[]
          }
          delete: {
            args: Prisma.BannedPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          update: {
            args: Prisma.BannedPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          deleteMany: {
            args: Prisma.BannedPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannedPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannedPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>[]
          }
          upsert: {
            args: Prisma.BannedPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannedPlayerPayload>
          }
          aggregate: {
            args: Prisma.BannedPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBannedPlayer>
          }
          groupBy: {
            args: Prisma.BannedPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannedPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannedPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<BannedPlayerCountAggregateOutputType> | number
          }
        }
      }
      ScanResult: {
        payload: Prisma.$ScanResultPayload<ExtArgs>
        fields: Prisma.ScanResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          findFirst: {
            args: Prisma.ScanResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          findMany: {
            args: Prisma.ScanResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>[]
          }
          create: {
            args: Prisma.ScanResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          createMany: {
            args: Prisma.ScanResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>[]
          }
          delete: {
            args: Prisma.ScanResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          update: {
            args: Prisma.ScanResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          deleteMany: {
            args: Prisma.ScanResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>[]
          }
          upsert: {
            args: Prisma.ScanResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanResultPayload>
          }
          aggregate: {
            args: Prisma.ScanResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanResult>
          }
          groupBy: {
            args: Prisma.ScanResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanResultCountArgs<ExtArgs>
            result: $Utils.Optional<ScanResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    scan?: ScanOmit
    bannedPlayer?: BannedPlayerOmit
    scanResult?: ScanResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScanCountOutputType
   */

  export type ScanCountOutputType = {
    results: number
  }

  export type ScanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ScanCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanCountOutputType
     */
    select?: ScanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScanCountOutputType without action
   */
  export type ScanCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanResultWhereInput
  }


  /**
   * Count Type BannedPlayerCountOutputType
   */

  export type BannedPlayerCountOutputType = {
    results: number
  }

  export type BannedPlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | BannedPlayerCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * BannedPlayerCountOutputType without action
   */
  export type BannedPlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayerCountOutputType
     */
    select?: BannedPlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BannedPlayerCountOutputType without action
   */
  export type BannedPlayerCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Scan
   */

  export type AggregateScan = {
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  export type ScanAvgAggregateOutputType = {
    id: number | null
  }

  export type ScanSumAggregateOutputType = {
    id: number | null
  }

  export type ScanMinAggregateOutputType = {
    id: number | null
    username: string | null
    dateRange: string | null
    scannedAt: Date | null
  }

  export type ScanMaxAggregateOutputType = {
    id: number | null
    username: string | null
    dateRange: string | null
    scannedAt: Date | null
  }

  export type ScanCountAggregateOutputType = {
    id: number
    username: number
    dateRange: number
    scannedAt: number
    _all: number
  }


  export type ScanAvgAggregateInputType = {
    id?: true
  }

  export type ScanSumAggregateInputType = {
    id?: true
  }

  export type ScanMinAggregateInputType = {
    id?: true
    username?: true
    dateRange?: true
    scannedAt?: true
  }

  export type ScanMaxAggregateInputType = {
    id?: true
    username?: true
    dateRange?: true
    scannedAt?: true
  }

  export type ScanCountAggregateInputType = {
    id?: true
    username?: true
    dateRange?: true
    scannedAt?: true
    _all?: true
  }

  export type ScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scan to aggregate.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scans
    **/
    _count?: true | ScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanMaxAggregateInputType
  }

  export type GetScanAggregateType<T extends ScanAggregateArgs> = {
        [P in keyof T & keyof AggregateScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScan[P]>
      : GetScalarType<T[P], AggregateScan[P]>
  }




  export type ScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanWhereInput
    orderBy?: ScanOrderByWithAggregationInput | ScanOrderByWithAggregationInput[]
    by: ScanScalarFieldEnum[] | ScanScalarFieldEnum
    having?: ScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanCountAggregateInputType | true
    _avg?: ScanAvgAggregateInputType
    _sum?: ScanSumAggregateInputType
    _min?: ScanMinAggregateInputType
    _max?: ScanMaxAggregateInputType
  }

  export type ScanGroupByOutputType = {
    id: number
    username: string
    dateRange: string
    scannedAt: Date
    _count: ScanCountAggregateOutputType | null
    _avg: ScanAvgAggregateOutputType | null
    _sum: ScanSumAggregateOutputType | null
    _min: ScanMinAggregateOutputType | null
    _max: ScanMaxAggregateOutputType | null
  }

  type GetScanGroupByPayload<T extends ScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanGroupByOutputType[P]>
            : GetScalarType<T[P], ScanGroupByOutputType[P]>
        }
      >
    >


  export type ScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    dateRange?: boolean
    scannedAt?: boolean
    results?: boolean | Scan$resultsArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    dateRange?: boolean
    scannedAt?: boolean
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    dateRange?: boolean
    scannedAt?: boolean
  }, ExtArgs["result"]["scan"]>

  export type ScanSelectScalar = {
    id?: boolean
    username?: boolean
    dateRange?: boolean
    scannedAt?: boolean
  }

  export type ScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "dateRange" | "scannedAt", ExtArgs["result"]["scan"]>
  export type ScanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | Scan$resultsArgs<ExtArgs>
    _count?: boolean | ScanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scan"
    objects: {
      results: Prisma.$ScanResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      dateRange: string
      scannedAt: Date
    }, ExtArgs["result"]["scan"]>
    composites: {}
  }

  type ScanGetPayload<S extends boolean | null | undefined | ScanDefaultArgs> = $Result.GetResult<Prisma.$ScanPayload, S>

  type ScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanCountAggregateInputType | true
    }

  export interface ScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scan'], meta: { name: 'Scan' } }
    /**
     * Find zero or one Scan that matches the filter.
     * @param {ScanFindUniqueArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanFindUniqueArgs>(args: SelectSubset<T, ScanFindUniqueArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanFindUniqueOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanFindFirstArgs>(args?: SelectSubset<T, ScanFindFirstArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindFirstOrThrowArgs} args - Arguments to find a Scan
     * @example
     * // Get one Scan
     * const scan = await prisma.scan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scans
     * const scans = await prisma.scan.findMany()
     * 
     * // Get first 10 Scans
     * const scans = await prisma.scan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanWithIdOnly = await prisma.scan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanFindManyArgs>(args?: SelectSubset<T, ScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scan.
     * @param {ScanCreateArgs} args - Arguments to create a Scan.
     * @example
     * // Create one Scan
     * const Scan = await prisma.scan.create({
     *   data: {
     *     // ... data to create a Scan
     *   }
     * })
     * 
     */
    create<T extends ScanCreateArgs>(args: SelectSubset<T, ScanCreateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scans.
     * @param {ScanCreateManyArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanCreateManyArgs>(args?: SelectSubset<T, ScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scans and returns the data saved in the database.
     * @param {ScanCreateManyAndReturnArgs} args - Arguments to create many Scans.
     * @example
     * // Create many Scans
     * const scan = await prisma.scan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scan.
     * @param {ScanDeleteArgs} args - Arguments to delete one Scan.
     * @example
     * // Delete one Scan
     * const Scan = await prisma.scan.delete({
     *   where: {
     *     // ... filter to delete one Scan
     *   }
     * })
     * 
     */
    delete<T extends ScanDeleteArgs>(args: SelectSubset<T, ScanDeleteArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scan.
     * @param {ScanUpdateArgs} args - Arguments to update one Scan.
     * @example
     * // Update one Scan
     * const scan = await prisma.scan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanUpdateArgs>(args: SelectSubset<T, ScanUpdateArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scans.
     * @param {ScanDeleteManyArgs} args - Arguments to filter Scans to delete.
     * @example
     * // Delete a few Scans
     * const { count } = await prisma.scan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanDeleteManyArgs>(args?: SelectSubset<T, ScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanUpdateManyArgs>(args: SelectSubset<T, ScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scans and returns the data updated in the database.
     * @param {ScanUpdateManyAndReturnArgs} args - Arguments to update many Scans.
     * @example
     * // Update many Scans
     * const scan = await prisma.scan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scans and only return the `id`
     * const scanWithIdOnly = await prisma.scan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scan.
     * @param {ScanUpsertArgs} args - Arguments to update or create a Scan.
     * @example
     * // Update or create a Scan
     * const scan = await prisma.scan.upsert({
     *   create: {
     *     // ... data to create a Scan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scan we want to update
     *   }
     * })
     */
    upsert<T extends ScanUpsertArgs>(args: SelectSubset<T, ScanUpsertArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanCountArgs} args - Arguments to filter Scans to count.
     * @example
     * // Count the number of Scans
     * const count = await prisma.scan.count({
     *   where: {
     *     // ... the filter for the Scans we want to count
     *   }
     * })
    **/
    count<T extends ScanCountArgs>(
      args?: Subset<T, ScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanAggregateArgs>(args: Subset<T, ScanAggregateArgs>): Prisma.PrismaPromise<GetScanAggregateType<T>>

    /**
     * Group by Scan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanGroupByArgs['orderBy'] }
        : { orderBy?: ScanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scan model
   */
  readonly fields: ScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends Scan$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Scan$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scan model
   */
  interface ScanFieldRefs {
    readonly id: FieldRef<"Scan", 'Int'>
    readonly username: FieldRef<"Scan", 'String'>
    readonly dateRange: FieldRef<"Scan", 'String'>
    readonly scannedAt: FieldRef<"Scan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scan findUnique
   */
  export type ScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findUniqueOrThrow
   */
  export type ScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan findFirst
   */
  export type ScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findFirstOrThrow
   */
  export type ScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scan to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan findMany
   */
  export type ScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter, which Scans to fetch.
     */
    where?: ScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scans to fetch.
     */
    orderBy?: ScanOrderByWithRelationInput | ScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scans.
     */
    cursor?: ScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scans.
     */
    distinct?: ScanScalarFieldEnum | ScanScalarFieldEnum[]
  }

  /**
   * Scan create
   */
  export type ScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to create a Scan.
     */
    data: XOR<ScanCreateInput, ScanUncheckedCreateInput>
  }

  /**
   * Scan createMany
   */
  export type ScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan createManyAndReturn
   */
  export type ScanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to create many Scans.
     */
    data: ScanCreateManyInput | ScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scan update
   */
  export type ScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The data needed to update a Scan.
     */
    data: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
    /**
     * Choose, which Scan to update.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan updateMany
   */
  export type ScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
  }

  /**
   * Scan updateManyAndReturn
   */
  export type ScanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * The data used to update Scans.
     */
    data: XOR<ScanUpdateManyMutationInput, ScanUncheckedUpdateManyInput>
    /**
     * Filter which Scans to update
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to update.
     */
    limit?: number
  }

  /**
   * Scan upsert
   */
  export type ScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * The filter to search for the Scan to update in case it exists.
     */
    where: ScanWhereUniqueInput
    /**
     * In case the Scan found by the `where` argument doesn't exist, create a new Scan with this data.
     */
    create: XOR<ScanCreateInput, ScanUncheckedCreateInput>
    /**
     * In case the Scan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanUpdateInput, ScanUncheckedUpdateInput>
  }

  /**
   * Scan delete
   */
  export type ScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
    /**
     * Filter which Scan to delete.
     */
    where: ScanWhereUniqueInput
  }

  /**
   * Scan deleteMany
   */
  export type ScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scans to delete
     */
    where?: ScanWhereInput
    /**
     * Limit how many Scans to delete.
     */
    limit?: number
  }

  /**
   * Scan.results
   */
  export type Scan$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    where?: ScanResultWhereInput
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    cursor?: ScanResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanResultScalarFieldEnum | ScanResultScalarFieldEnum[]
  }

  /**
   * Scan without action
   */
  export type ScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scan
     */
    select?: ScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scan
     */
    omit?: ScanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanInclude<ExtArgs> | null
  }


  /**
   * Model BannedPlayer
   */

  export type AggregateBannedPlayer = {
    _count: BannedPlayerCountAggregateOutputType | null
    _avg: BannedPlayerAvgAggregateOutputType | null
    _sum: BannedPlayerSumAggregateOutputType | null
    _min: BannedPlayerMinAggregateOutputType | null
    _max: BannedPlayerMaxAggregateOutputType | null
  }

  export type BannedPlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type BannedPlayerSumAggregateOutputType = {
    id: number | null
  }

  export type BannedPlayerMinAggregateOutputType = {
    id: number | null
    username: string | null
    profileUrl: string | null
    firstDetected: Date | null
  }

  export type BannedPlayerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    profileUrl: string | null
    firstDetected: Date | null
  }

  export type BannedPlayerCountAggregateOutputType = {
    id: number
    username: number
    profileUrl: number
    firstDetected: number
    _all: number
  }


  export type BannedPlayerAvgAggregateInputType = {
    id?: true
  }

  export type BannedPlayerSumAggregateInputType = {
    id?: true
  }

  export type BannedPlayerMinAggregateInputType = {
    id?: true
    username?: true
    profileUrl?: true
    firstDetected?: true
  }

  export type BannedPlayerMaxAggregateInputType = {
    id?: true
    username?: true
    profileUrl?: true
    firstDetected?: true
  }

  export type BannedPlayerCountAggregateInputType = {
    id?: true
    username?: true
    profileUrl?: true
    firstDetected?: true
    _all?: true
  }

  export type BannedPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannedPlayer to aggregate.
     */
    where?: BannedPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannedPlayers to fetch.
     */
    orderBy?: BannedPlayerOrderByWithRelationInput | BannedPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannedPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannedPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannedPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BannedPlayers
    **/
    _count?: true | BannedPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannedPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannedPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannedPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannedPlayerMaxAggregateInputType
  }

  export type GetBannedPlayerAggregateType<T extends BannedPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateBannedPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBannedPlayer[P]>
      : GetScalarType<T[P], AggregateBannedPlayer[P]>
  }




  export type BannedPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannedPlayerWhereInput
    orderBy?: BannedPlayerOrderByWithAggregationInput | BannedPlayerOrderByWithAggregationInput[]
    by: BannedPlayerScalarFieldEnum[] | BannedPlayerScalarFieldEnum
    having?: BannedPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannedPlayerCountAggregateInputType | true
    _avg?: BannedPlayerAvgAggregateInputType
    _sum?: BannedPlayerSumAggregateInputType
    _min?: BannedPlayerMinAggregateInputType
    _max?: BannedPlayerMaxAggregateInputType
  }

  export type BannedPlayerGroupByOutputType = {
    id: number
    username: string
    profileUrl: string
    firstDetected: Date
    _count: BannedPlayerCountAggregateOutputType | null
    _avg: BannedPlayerAvgAggregateOutputType | null
    _sum: BannedPlayerSumAggregateOutputType | null
    _min: BannedPlayerMinAggregateOutputType | null
    _max: BannedPlayerMaxAggregateOutputType | null
  }

  type GetBannedPlayerGroupByPayload<T extends BannedPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannedPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannedPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannedPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], BannedPlayerGroupByOutputType[P]>
        }
      >
    >


  export type BannedPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profileUrl?: boolean
    firstDetected?: boolean
    results?: boolean | BannedPlayer$resultsArgs<ExtArgs>
    _count?: boolean | BannedPlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bannedPlayer"]>

  export type BannedPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profileUrl?: boolean
    firstDetected?: boolean
  }, ExtArgs["result"]["bannedPlayer"]>

  export type BannedPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    profileUrl?: boolean
    firstDetected?: boolean
  }, ExtArgs["result"]["bannedPlayer"]>

  export type BannedPlayerSelectScalar = {
    id?: boolean
    username?: boolean
    profileUrl?: boolean
    firstDetected?: boolean
  }

  export type BannedPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "profileUrl" | "firstDetected", ExtArgs["result"]["bannedPlayer"]>
  export type BannedPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | BannedPlayer$resultsArgs<ExtArgs>
    _count?: boolean | BannedPlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BannedPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BannedPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BannedPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BannedPlayer"
    objects: {
      results: Prisma.$ScanResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      profileUrl: string
      firstDetected: Date
    }, ExtArgs["result"]["bannedPlayer"]>
    composites: {}
  }

  type BannedPlayerGetPayload<S extends boolean | null | undefined | BannedPlayerDefaultArgs> = $Result.GetResult<Prisma.$BannedPlayerPayload, S>

  type BannedPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannedPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannedPlayerCountAggregateInputType | true
    }

  export interface BannedPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BannedPlayer'], meta: { name: 'BannedPlayer' } }
    /**
     * Find zero or one BannedPlayer that matches the filter.
     * @param {BannedPlayerFindUniqueArgs} args - Arguments to find a BannedPlayer
     * @example
     * // Get one BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannedPlayerFindUniqueArgs>(args: SelectSubset<T, BannedPlayerFindUniqueArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BannedPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannedPlayerFindUniqueOrThrowArgs} args - Arguments to find a BannedPlayer
     * @example
     * // Get one BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannedPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannedPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannedPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerFindFirstArgs} args - Arguments to find a BannedPlayer
     * @example
     * // Get one BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannedPlayerFindFirstArgs>(args?: SelectSubset<T, BannedPlayerFindFirstArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BannedPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerFindFirstOrThrowArgs} args - Arguments to find a BannedPlayer
     * @example
     * // Get one BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannedPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannedPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BannedPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BannedPlayers
     * const bannedPlayers = await prisma.bannedPlayer.findMany()
     * 
     * // Get first 10 BannedPlayers
     * const bannedPlayers = await prisma.bannedPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannedPlayerWithIdOnly = await prisma.bannedPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannedPlayerFindManyArgs>(args?: SelectSubset<T, BannedPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BannedPlayer.
     * @param {BannedPlayerCreateArgs} args - Arguments to create a BannedPlayer.
     * @example
     * // Create one BannedPlayer
     * const BannedPlayer = await prisma.bannedPlayer.create({
     *   data: {
     *     // ... data to create a BannedPlayer
     *   }
     * })
     * 
     */
    create<T extends BannedPlayerCreateArgs>(args: SelectSubset<T, BannedPlayerCreateArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BannedPlayers.
     * @param {BannedPlayerCreateManyArgs} args - Arguments to create many BannedPlayers.
     * @example
     * // Create many BannedPlayers
     * const bannedPlayer = await prisma.bannedPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannedPlayerCreateManyArgs>(args?: SelectSubset<T, BannedPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BannedPlayers and returns the data saved in the database.
     * @param {BannedPlayerCreateManyAndReturnArgs} args - Arguments to create many BannedPlayers.
     * @example
     * // Create many BannedPlayers
     * const bannedPlayer = await prisma.bannedPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BannedPlayers and only return the `id`
     * const bannedPlayerWithIdOnly = await prisma.bannedPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannedPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannedPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BannedPlayer.
     * @param {BannedPlayerDeleteArgs} args - Arguments to delete one BannedPlayer.
     * @example
     * // Delete one BannedPlayer
     * const BannedPlayer = await prisma.bannedPlayer.delete({
     *   where: {
     *     // ... filter to delete one BannedPlayer
     *   }
     * })
     * 
     */
    delete<T extends BannedPlayerDeleteArgs>(args: SelectSubset<T, BannedPlayerDeleteArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BannedPlayer.
     * @param {BannedPlayerUpdateArgs} args - Arguments to update one BannedPlayer.
     * @example
     * // Update one BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannedPlayerUpdateArgs>(args: SelectSubset<T, BannedPlayerUpdateArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BannedPlayers.
     * @param {BannedPlayerDeleteManyArgs} args - Arguments to filter BannedPlayers to delete.
     * @example
     * // Delete a few BannedPlayers
     * const { count } = await prisma.bannedPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannedPlayerDeleteManyArgs>(args?: SelectSubset<T, BannedPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannedPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BannedPlayers
     * const bannedPlayer = await prisma.bannedPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannedPlayerUpdateManyArgs>(args: SelectSubset<T, BannedPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BannedPlayers and returns the data updated in the database.
     * @param {BannedPlayerUpdateManyAndReturnArgs} args - Arguments to update many BannedPlayers.
     * @example
     * // Update many BannedPlayers
     * const bannedPlayer = await prisma.bannedPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BannedPlayers and only return the `id`
     * const bannedPlayerWithIdOnly = await prisma.bannedPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannedPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannedPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BannedPlayer.
     * @param {BannedPlayerUpsertArgs} args - Arguments to update or create a BannedPlayer.
     * @example
     * // Update or create a BannedPlayer
     * const bannedPlayer = await prisma.bannedPlayer.upsert({
     *   create: {
     *     // ... data to create a BannedPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BannedPlayer we want to update
     *   }
     * })
     */
    upsert<T extends BannedPlayerUpsertArgs>(args: SelectSubset<T, BannedPlayerUpsertArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BannedPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerCountArgs} args - Arguments to filter BannedPlayers to count.
     * @example
     * // Count the number of BannedPlayers
     * const count = await prisma.bannedPlayer.count({
     *   where: {
     *     // ... the filter for the BannedPlayers we want to count
     *   }
     * })
    **/
    count<T extends BannedPlayerCountArgs>(
      args?: Subset<T, BannedPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannedPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BannedPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannedPlayerAggregateArgs>(args: Subset<T, BannedPlayerAggregateArgs>): Prisma.PrismaPromise<GetBannedPlayerAggregateType<T>>

    /**
     * Group by BannedPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannedPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannedPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannedPlayerGroupByArgs['orderBy'] }
        : { orderBy?: BannedPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannedPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannedPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BannedPlayer model
   */
  readonly fields: BannedPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BannedPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannedPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends BannedPlayer$resultsArgs<ExtArgs> = {}>(args?: Subset<T, BannedPlayer$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BannedPlayer model
   */
  interface BannedPlayerFieldRefs {
    readonly id: FieldRef<"BannedPlayer", 'Int'>
    readonly username: FieldRef<"BannedPlayer", 'String'>
    readonly profileUrl: FieldRef<"BannedPlayer", 'String'>
    readonly firstDetected: FieldRef<"BannedPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BannedPlayer findUnique
   */
  export type BannedPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter, which BannedPlayer to fetch.
     */
    where: BannedPlayerWhereUniqueInput
  }

  /**
   * BannedPlayer findUniqueOrThrow
   */
  export type BannedPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter, which BannedPlayer to fetch.
     */
    where: BannedPlayerWhereUniqueInput
  }

  /**
   * BannedPlayer findFirst
   */
  export type BannedPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter, which BannedPlayer to fetch.
     */
    where?: BannedPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannedPlayers to fetch.
     */
    orderBy?: BannedPlayerOrderByWithRelationInput | BannedPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannedPlayers.
     */
    cursor?: BannedPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannedPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannedPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannedPlayers.
     */
    distinct?: BannedPlayerScalarFieldEnum | BannedPlayerScalarFieldEnum[]
  }

  /**
   * BannedPlayer findFirstOrThrow
   */
  export type BannedPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter, which BannedPlayer to fetch.
     */
    where?: BannedPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannedPlayers to fetch.
     */
    orderBy?: BannedPlayerOrderByWithRelationInput | BannedPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BannedPlayers.
     */
    cursor?: BannedPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannedPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannedPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannedPlayers.
     */
    distinct?: BannedPlayerScalarFieldEnum | BannedPlayerScalarFieldEnum[]
  }

  /**
   * BannedPlayer findMany
   */
  export type BannedPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter, which BannedPlayers to fetch.
     */
    where?: BannedPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BannedPlayers to fetch.
     */
    orderBy?: BannedPlayerOrderByWithRelationInput | BannedPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BannedPlayers.
     */
    cursor?: BannedPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BannedPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BannedPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BannedPlayers.
     */
    distinct?: BannedPlayerScalarFieldEnum | BannedPlayerScalarFieldEnum[]
  }

  /**
   * BannedPlayer create
   */
  export type BannedPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a BannedPlayer.
     */
    data: XOR<BannedPlayerCreateInput, BannedPlayerUncheckedCreateInput>
  }

  /**
   * BannedPlayer createMany
   */
  export type BannedPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BannedPlayers.
     */
    data: BannedPlayerCreateManyInput | BannedPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BannedPlayer createManyAndReturn
   */
  export type BannedPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many BannedPlayers.
     */
    data: BannedPlayerCreateManyInput | BannedPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BannedPlayer update
   */
  export type BannedPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a BannedPlayer.
     */
    data: XOR<BannedPlayerUpdateInput, BannedPlayerUncheckedUpdateInput>
    /**
     * Choose, which BannedPlayer to update.
     */
    where: BannedPlayerWhereUniqueInput
  }

  /**
   * BannedPlayer updateMany
   */
  export type BannedPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BannedPlayers.
     */
    data: XOR<BannedPlayerUpdateManyMutationInput, BannedPlayerUncheckedUpdateManyInput>
    /**
     * Filter which BannedPlayers to update
     */
    where?: BannedPlayerWhereInput
    /**
     * Limit how many BannedPlayers to update.
     */
    limit?: number
  }

  /**
   * BannedPlayer updateManyAndReturn
   */
  export type BannedPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * The data used to update BannedPlayers.
     */
    data: XOR<BannedPlayerUpdateManyMutationInput, BannedPlayerUncheckedUpdateManyInput>
    /**
     * Filter which BannedPlayers to update
     */
    where?: BannedPlayerWhereInput
    /**
     * Limit how many BannedPlayers to update.
     */
    limit?: number
  }

  /**
   * BannedPlayer upsert
   */
  export type BannedPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the BannedPlayer to update in case it exists.
     */
    where: BannedPlayerWhereUniqueInput
    /**
     * In case the BannedPlayer found by the `where` argument doesn't exist, create a new BannedPlayer with this data.
     */
    create: XOR<BannedPlayerCreateInput, BannedPlayerUncheckedCreateInput>
    /**
     * In case the BannedPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannedPlayerUpdateInput, BannedPlayerUncheckedUpdateInput>
  }

  /**
   * BannedPlayer delete
   */
  export type BannedPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
    /**
     * Filter which BannedPlayer to delete.
     */
    where: BannedPlayerWhereUniqueInput
  }

  /**
   * BannedPlayer deleteMany
   */
  export type BannedPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BannedPlayers to delete
     */
    where?: BannedPlayerWhereInput
    /**
     * Limit how many BannedPlayers to delete.
     */
    limit?: number
  }

  /**
   * BannedPlayer.results
   */
  export type BannedPlayer$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    where?: ScanResultWhereInput
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    cursor?: ScanResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanResultScalarFieldEnum | ScanResultScalarFieldEnum[]
  }

  /**
   * BannedPlayer without action
   */
  export type BannedPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BannedPlayer
     */
    select?: BannedPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BannedPlayer
     */
    omit?: BannedPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannedPlayerInclude<ExtArgs> | null
  }


  /**
   * Model ScanResult
   */

  export type AggregateScanResult = {
    _count: ScanResultCountAggregateOutputType | null
    _avg: ScanResultAvgAggregateOutputType | null
    _sum: ScanResultSumAggregateOutputType | null
    _min: ScanResultMinAggregateOutputType | null
    _max: ScanResultMaxAggregateOutputType | null
  }

  export type ScanResultAvgAggregateOutputType = {
    id: number | null
    scanId: number | null
    bannedPlayerId: number | null
  }

  export type ScanResultSumAggregateOutputType = {
    id: number | null
    scanId: number | null
    bannedPlayerId: number | null
  }

  export type ScanResultMinAggregateOutputType = {
    id: number | null
    scanId: number | null
    bannedPlayerId: number | null
  }

  export type ScanResultMaxAggregateOutputType = {
    id: number | null
    scanId: number | null
    bannedPlayerId: number | null
  }

  export type ScanResultCountAggregateOutputType = {
    id: number
    scanId: number
    bannedPlayerId: number
    games: number
    _all: number
  }


  export type ScanResultAvgAggregateInputType = {
    id?: true
    scanId?: true
    bannedPlayerId?: true
  }

  export type ScanResultSumAggregateInputType = {
    id?: true
    scanId?: true
    bannedPlayerId?: true
  }

  export type ScanResultMinAggregateInputType = {
    id?: true
    scanId?: true
    bannedPlayerId?: true
  }

  export type ScanResultMaxAggregateInputType = {
    id?: true
    scanId?: true
    bannedPlayerId?: true
  }

  export type ScanResultCountAggregateInputType = {
    id?: true
    scanId?: true
    bannedPlayerId?: true
    games?: true
    _all?: true
  }

  export type ScanResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanResult to aggregate.
     */
    where?: ScanResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanResults to fetch.
     */
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanResults
    **/
    _count?: true | ScanResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanResultMaxAggregateInputType
  }

  export type GetScanResultAggregateType<T extends ScanResultAggregateArgs> = {
        [P in keyof T & keyof AggregateScanResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanResult[P]>
      : GetScalarType<T[P], AggregateScanResult[P]>
  }




  export type ScanResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanResultWhereInput
    orderBy?: ScanResultOrderByWithAggregationInput | ScanResultOrderByWithAggregationInput[]
    by: ScanResultScalarFieldEnum[] | ScanResultScalarFieldEnum
    having?: ScanResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanResultCountAggregateInputType | true
    _avg?: ScanResultAvgAggregateInputType
    _sum?: ScanResultSumAggregateInputType
    _min?: ScanResultMinAggregateInputType
    _max?: ScanResultMaxAggregateInputType
  }

  export type ScanResultGroupByOutputType = {
    id: number
    scanId: number
    bannedPlayerId: number
    games: JsonValue
    _count: ScanResultCountAggregateOutputType | null
    _avg: ScanResultAvgAggregateOutputType | null
    _sum: ScanResultSumAggregateOutputType | null
    _min: ScanResultMinAggregateOutputType | null
    _max: ScanResultMaxAggregateOutputType | null
  }

  type GetScanResultGroupByPayload<T extends ScanResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanResultGroupByOutputType[P]>
            : GetScalarType<T[P], ScanResultGroupByOutputType[P]>
        }
      >
    >


  export type ScanResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    bannedPlayerId?: boolean
    games?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanResult"]>

  export type ScanResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    bannedPlayerId?: boolean
    games?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanResult"]>

  export type ScanResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    bannedPlayerId?: boolean
    games?: boolean
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanResult"]>

  export type ScanResultSelectScalar = {
    id?: boolean
    scanId?: boolean
    bannedPlayerId?: boolean
    games?: boolean
  }

  export type ScanResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "bannedPlayerId" | "games", ExtArgs["result"]["scanResult"]>
  export type ScanResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }
  export type ScanResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }
  export type ScanResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scan?: boolean | ScanDefaultArgs<ExtArgs>
    bannedPlayer?: boolean | BannedPlayerDefaultArgs<ExtArgs>
  }

  export type $ScanResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanResult"
    objects: {
      scan: Prisma.$ScanPayload<ExtArgs>
      bannedPlayer: Prisma.$BannedPlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scanId: number
      bannedPlayerId: number
      games: Prisma.JsonValue
    }, ExtArgs["result"]["scanResult"]>
    composites: {}
  }

  type ScanResultGetPayload<S extends boolean | null | undefined | ScanResultDefaultArgs> = $Result.GetResult<Prisma.$ScanResultPayload, S>

  type ScanResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanResultCountAggregateInputType | true
    }

  export interface ScanResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanResult'], meta: { name: 'ScanResult' } }
    /**
     * Find zero or one ScanResult that matches the filter.
     * @param {ScanResultFindUniqueArgs} args - Arguments to find a ScanResult
     * @example
     * // Get one ScanResult
     * const scanResult = await prisma.scanResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanResultFindUniqueArgs>(args: SelectSubset<T, ScanResultFindUniqueArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanResultFindUniqueOrThrowArgs} args - Arguments to find a ScanResult
     * @example
     * // Get one ScanResult
     * const scanResult = await prisma.scanResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultFindFirstArgs} args - Arguments to find a ScanResult
     * @example
     * // Get one ScanResult
     * const scanResult = await prisma.scanResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanResultFindFirstArgs>(args?: SelectSubset<T, ScanResultFindFirstArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultFindFirstOrThrowArgs} args - Arguments to find a ScanResult
     * @example
     * // Get one ScanResult
     * const scanResult = await prisma.scanResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanResults
     * const scanResults = await prisma.scanResult.findMany()
     * 
     * // Get first 10 ScanResults
     * const scanResults = await prisma.scanResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanResultWithIdOnly = await prisma.scanResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanResultFindManyArgs>(args?: SelectSubset<T, ScanResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanResult.
     * @param {ScanResultCreateArgs} args - Arguments to create a ScanResult.
     * @example
     * // Create one ScanResult
     * const ScanResult = await prisma.scanResult.create({
     *   data: {
     *     // ... data to create a ScanResult
     *   }
     * })
     * 
     */
    create<T extends ScanResultCreateArgs>(args: SelectSubset<T, ScanResultCreateArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanResults.
     * @param {ScanResultCreateManyArgs} args - Arguments to create many ScanResults.
     * @example
     * // Create many ScanResults
     * const scanResult = await prisma.scanResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanResultCreateManyArgs>(args?: SelectSubset<T, ScanResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanResults and returns the data saved in the database.
     * @param {ScanResultCreateManyAndReturnArgs} args - Arguments to create many ScanResults.
     * @example
     * // Create many ScanResults
     * const scanResult = await prisma.scanResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanResults and only return the `id`
     * const scanResultWithIdOnly = await prisma.scanResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanResult.
     * @param {ScanResultDeleteArgs} args - Arguments to delete one ScanResult.
     * @example
     * // Delete one ScanResult
     * const ScanResult = await prisma.scanResult.delete({
     *   where: {
     *     // ... filter to delete one ScanResult
     *   }
     * })
     * 
     */
    delete<T extends ScanResultDeleteArgs>(args: SelectSubset<T, ScanResultDeleteArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanResult.
     * @param {ScanResultUpdateArgs} args - Arguments to update one ScanResult.
     * @example
     * // Update one ScanResult
     * const scanResult = await prisma.scanResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanResultUpdateArgs>(args: SelectSubset<T, ScanResultUpdateArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanResults.
     * @param {ScanResultDeleteManyArgs} args - Arguments to filter ScanResults to delete.
     * @example
     * // Delete a few ScanResults
     * const { count } = await prisma.scanResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanResultDeleteManyArgs>(args?: SelectSubset<T, ScanResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanResults
     * const scanResult = await prisma.scanResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanResultUpdateManyArgs>(args: SelectSubset<T, ScanResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanResults and returns the data updated in the database.
     * @param {ScanResultUpdateManyAndReturnArgs} args - Arguments to update many ScanResults.
     * @example
     * // Update many ScanResults
     * const scanResult = await prisma.scanResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanResults and only return the `id`
     * const scanResultWithIdOnly = await prisma.scanResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanResult.
     * @param {ScanResultUpsertArgs} args - Arguments to update or create a ScanResult.
     * @example
     * // Update or create a ScanResult
     * const scanResult = await prisma.scanResult.upsert({
     *   create: {
     *     // ... data to create a ScanResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanResult we want to update
     *   }
     * })
     */
    upsert<T extends ScanResultUpsertArgs>(args: SelectSubset<T, ScanResultUpsertArgs<ExtArgs>>): Prisma__ScanResultClient<$Result.GetResult<Prisma.$ScanResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultCountArgs} args - Arguments to filter ScanResults to count.
     * @example
     * // Count the number of ScanResults
     * const count = await prisma.scanResult.count({
     *   where: {
     *     // ... the filter for the ScanResults we want to count
     *   }
     * })
    **/
    count<T extends ScanResultCountArgs>(
      args?: Subset<T, ScanResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanResultAggregateArgs>(args: Subset<T, ScanResultAggregateArgs>): Prisma.PrismaPromise<GetScanResultAggregateType<T>>

    /**
     * Group by ScanResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanResultGroupByArgs['orderBy'] }
        : { orderBy?: ScanResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanResult model
   */
  readonly fields: ScanResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scan<T extends ScanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScanDefaultArgs<ExtArgs>>): Prisma__ScanClient<$Result.GetResult<Prisma.$ScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bannedPlayer<T extends BannedPlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BannedPlayerDefaultArgs<ExtArgs>>): Prisma__BannedPlayerClient<$Result.GetResult<Prisma.$BannedPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanResult model
   */
  interface ScanResultFieldRefs {
    readonly id: FieldRef<"ScanResult", 'Int'>
    readonly scanId: FieldRef<"ScanResult", 'Int'>
    readonly bannedPlayerId: FieldRef<"ScanResult", 'Int'>
    readonly games: FieldRef<"ScanResult", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ScanResult findUnique
   */
  export type ScanResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter, which ScanResult to fetch.
     */
    where: ScanResultWhereUniqueInput
  }

  /**
   * ScanResult findUniqueOrThrow
   */
  export type ScanResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter, which ScanResult to fetch.
     */
    where: ScanResultWhereUniqueInput
  }

  /**
   * ScanResult findFirst
   */
  export type ScanResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter, which ScanResult to fetch.
     */
    where?: ScanResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanResults to fetch.
     */
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanResults.
     */
    cursor?: ScanResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanResults.
     */
    distinct?: ScanResultScalarFieldEnum | ScanResultScalarFieldEnum[]
  }

  /**
   * ScanResult findFirstOrThrow
   */
  export type ScanResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter, which ScanResult to fetch.
     */
    where?: ScanResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanResults to fetch.
     */
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanResults.
     */
    cursor?: ScanResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanResults.
     */
    distinct?: ScanResultScalarFieldEnum | ScanResultScalarFieldEnum[]
  }

  /**
   * ScanResult findMany
   */
  export type ScanResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter, which ScanResults to fetch.
     */
    where?: ScanResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanResults to fetch.
     */
    orderBy?: ScanResultOrderByWithRelationInput | ScanResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanResults.
     */
    cursor?: ScanResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanResults.
     */
    distinct?: ScanResultScalarFieldEnum | ScanResultScalarFieldEnum[]
  }

  /**
   * ScanResult create
   */
  export type ScanResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ScanResult.
     */
    data: XOR<ScanResultCreateInput, ScanResultUncheckedCreateInput>
  }

  /**
   * ScanResult createMany
   */
  export type ScanResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanResults.
     */
    data: ScanResultCreateManyInput | ScanResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanResult createManyAndReturn
   */
  export type ScanResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * The data used to create many ScanResults.
     */
    data: ScanResultCreateManyInput | ScanResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanResult update
   */
  export type ScanResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ScanResult.
     */
    data: XOR<ScanResultUpdateInput, ScanResultUncheckedUpdateInput>
    /**
     * Choose, which ScanResult to update.
     */
    where: ScanResultWhereUniqueInput
  }

  /**
   * ScanResult updateMany
   */
  export type ScanResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanResults.
     */
    data: XOR<ScanResultUpdateManyMutationInput, ScanResultUncheckedUpdateManyInput>
    /**
     * Filter which ScanResults to update
     */
    where?: ScanResultWhereInput
    /**
     * Limit how many ScanResults to update.
     */
    limit?: number
  }

  /**
   * ScanResult updateManyAndReturn
   */
  export type ScanResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * The data used to update ScanResults.
     */
    data: XOR<ScanResultUpdateManyMutationInput, ScanResultUncheckedUpdateManyInput>
    /**
     * Filter which ScanResults to update
     */
    where?: ScanResultWhereInput
    /**
     * Limit how many ScanResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanResult upsert
   */
  export type ScanResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ScanResult to update in case it exists.
     */
    where: ScanResultWhereUniqueInput
    /**
     * In case the ScanResult found by the `where` argument doesn't exist, create a new ScanResult with this data.
     */
    create: XOR<ScanResultCreateInput, ScanResultUncheckedCreateInput>
    /**
     * In case the ScanResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanResultUpdateInput, ScanResultUncheckedUpdateInput>
  }

  /**
   * ScanResult delete
   */
  export type ScanResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
    /**
     * Filter which ScanResult to delete.
     */
    where: ScanResultWhereUniqueInput
  }

  /**
   * ScanResult deleteMany
   */
  export type ScanResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanResults to delete
     */
    where?: ScanResultWhereInput
    /**
     * Limit how many ScanResults to delete.
     */
    limit?: number
  }

  /**
   * ScanResult without action
   */
  export type ScanResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanResult
     */
    select?: ScanResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanResult
     */
    omit?: ScanResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScanScalarFieldEnum: {
    id: 'id',
    username: 'username',
    dateRange: 'dateRange',
    scannedAt: 'scannedAt'
  };

  export type ScanScalarFieldEnum = (typeof ScanScalarFieldEnum)[keyof typeof ScanScalarFieldEnum]


  export const BannedPlayerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    profileUrl: 'profileUrl',
    firstDetected: 'firstDetected'
  };

  export type BannedPlayerScalarFieldEnum = (typeof BannedPlayerScalarFieldEnum)[keyof typeof BannedPlayerScalarFieldEnum]


  export const ScanResultScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    bannedPlayerId: 'bannedPlayerId',
    games: 'games'
  };

  export type ScanResultScalarFieldEnum = (typeof ScanResultScalarFieldEnum)[keyof typeof ScanResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScanWhereInput = {
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    id?: IntFilter<"Scan"> | number
    username?: StringFilter<"Scan"> | string
    dateRange?: StringFilter<"Scan"> | string
    scannedAt?: DateTimeFilter<"Scan"> | Date | string
    results?: ScanResultListRelationFilter
  }

  export type ScanOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    dateRange?: SortOrder
    scannedAt?: SortOrder
    results?: ScanResultOrderByRelationAggregateInput
  }

  export type ScanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScanWhereInput | ScanWhereInput[]
    OR?: ScanWhereInput[]
    NOT?: ScanWhereInput | ScanWhereInput[]
    username?: StringFilter<"Scan"> | string
    dateRange?: StringFilter<"Scan"> | string
    scannedAt?: DateTimeFilter<"Scan"> | Date | string
    results?: ScanResultListRelationFilter
  }, "id">

  export type ScanOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    dateRange?: SortOrder
    scannedAt?: SortOrder
    _count?: ScanCountOrderByAggregateInput
    _avg?: ScanAvgOrderByAggregateInput
    _max?: ScanMaxOrderByAggregateInput
    _min?: ScanMinOrderByAggregateInput
    _sum?: ScanSumOrderByAggregateInput
  }

  export type ScanScalarWhereWithAggregatesInput = {
    AND?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    OR?: ScanScalarWhereWithAggregatesInput[]
    NOT?: ScanScalarWhereWithAggregatesInput | ScanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scan"> | number
    username?: StringWithAggregatesFilter<"Scan"> | string
    dateRange?: StringWithAggregatesFilter<"Scan"> | string
    scannedAt?: DateTimeWithAggregatesFilter<"Scan"> | Date | string
  }

  export type BannedPlayerWhereInput = {
    AND?: BannedPlayerWhereInput | BannedPlayerWhereInput[]
    OR?: BannedPlayerWhereInput[]
    NOT?: BannedPlayerWhereInput | BannedPlayerWhereInput[]
    id?: IntFilter<"BannedPlayer"> | number
    username?: StringFilter<"BannedPlayer"> | string
    profileUrl?: StringFilter<"BannedPlayer"> | string
    firstDetected?: DateTimeFilter<"BannedPlayer"> | Date | string
    results?: ScanResultListRelationFilter
  }

  export type BannedPlayerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    firstDetected?: SortOrder
    results?: ScanResultOrderByRelationAggregateInput
  }

  export type BannedPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: BannedPlayerWhereInput | BannedPlayerWhereInput[]
    OR?: BannedPlayerWhereInput[]
    NOT?: BannedPlayerWhereInput | BannedPlayerWhereInput[]
    profileUrl?: StringFilter<"BannedPlayer"> | string
    firstDetected?: DateTimeFilter<"BannedPlayer"> | Date | string
    results?: ScanResultListRelationFilter
  }, "id" | "username">

  export type BannedPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    firstDetected?: SortOrder
    _count?: BannedPlayerCountOrderByAggregateInput
    _avg?: BannedPlayerAvgOrderByAggregateInput
    _max?: BannedPlayerMaxOrderByAggregateInput
    _min?: BannedPlayerMinOrderByAggregateInput
    _sum?: BannedPlayerSumOrderByAggregateInput
  }

  export type BannedPlayerScalarWhereWithAggregatesInput = {
    AND?: BannedPlayerScalarWhereWithAggregatesInput | BannedPlayerScalarWhereWithAggregatesInput[]
    OR?: BannedPlayerScalarWhereWithAggregatesInput[]
    NOT?: BannedPlayerScalarWhereWithAggregatesInput | BannedPlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BannedPlayer"> | number
    username?: StringWithAggregatesFilter<"BannedPlayer"> | string
    profileUrl?: StringWithAggregatesFilter<"BannedPlayer"> | string
    firstDetected?: DateTimeWithAggregatesFilter<"BannedPlayer"> | Date | string
  }

  export type ScanResultWhereInput = {
    AND?: ScanResultWhereInput | ScanResultWhereInput[]
    OR?: ScanResultWhereInput[]
    NOT?: ScanResultWhereInput | ScanResultWhereInput[]
    id?: IntFilter<"ScanResult"> | number
    scanId?: IntFilter<"ScanResult"> | number
    bannedPlayerId?: IntFilter<"ScanResult"> | number
    games?: JsonFilter<"ScanResult">
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    bannedPlayer?: XOR<BannedPlayerScalarRelationFilter, BannedPlayerWhereInput>
  }

  export type ScanResultOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
    games?: SortOrder
    scan?: ScanOrderByWithRelationInput
    bannedPlayer?: BannedPlayerOrderByWithRelationInput
  }

  export type ScanResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScanResultWhereInput | ScanResultWhereInput[]
    OR?: ScanResultWhereInput[]
    NOT?: ScanResultWhereInput | ScanResultWhereInput[]
    scanId?: IntFilter<"ScanResult"> | number
    bannedPlayerId?: IntFilter<"ScanResult"> | number
    games?: JsonFilter<"ScanResult">
    scan?: XOR<ScanScalarRelationFilter, ScanWhereInput>
    bannedPlayer?: XOR<BannedPlayerScalarRelationFilter, BannedPlayerWhereInput>
  }, "id">

  export type ScanResultOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
    games?: SortOrder
    _count?: ScanResultCountOrderByAggregateInput
    _avg?: ScanResultAvgOrderByAggregateInput
    _max?: ScanResultMaxOrderByAggregateInput
    _min?: ScanResultMinOrderByAggregateInput
    _sum?: ScanResultSumOrderByAggregateInput
  }

  export type ScanResultScalarWhereWithAggregatesInput = {
    AND?: ScanResultScalarWhereWithAggregatesInput | ScanResultScalarWhereWithAggregatesInput[]
    OR?: ScanResultScalarWhereWithAggregatesInput[]
    NOT?: ScanResultScalarWhereWithAggregatesInput | ScanResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScanResult"> | number
    scanId?: IntWithAggregatesFilter<"ScanResult"> | number
    bannedPlayerId?: IntWithAggregatesFilter<"ScanResult"> | number
    games?: JsonWithAggregatesFilter<"ScanResult">
  }

  export type ScanCreateInput = {
    username: string
    dateRange: string
    scannedAt?: Date | string
    results?: ScanResultCreateNestedManyWithoutScanInput
  }

  export type ScanUncheckedCreateInput = {
    id?: number
    username: string
    dateRange: string
    scannedAt?: Date | string
    results?: ScanResultUncheckedCreateNestedManyWithoutScanInput
  }

  export type ScanUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ScanResultUpdateManyWithoutScanNestedInput
  }

  export type ScanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ScanResultUncheckedUpdateManyWithoutScanNestedInput
  }

  export type ScanCreateManyInput = {
    id?: number
    username: string
    dateRange: string
    scannedAt?: Date | string
  }

  export type ScanUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannedPlayerCreateInput = {
    username: string
    profileUrl: string
    firstDetected?: Date | string
    results?: ScanResultCreateNestedManyWithoutBannedPlayerInput
  }

  export type BannedPlayerUncheckedCreateInput = {
    id?: number
    username: string
    profileUrl: string
    firstDetected?: Date | string
    results?: ScanResultUncheckedCreateNestedManyWithoutBannedPlayerInput
  }

  export type BannedPlayerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ScanResultUpdateManyWithoutBannedPlayerNestedInput
  }

  export type BannedPlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ScanResultUncheckedUpdateManyWithoutBannedPlayerNestedInput
  }

  export type BannedPlayerCreateManyInput = {
    id?: number
    username: string
    profileUrl: string
    firstDetected?: Date | string
  }

  export type BannedPlayerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannedPlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanResultCreateInput = {
    games: JsonNullValueInput | InputJsonValue
    scan: ScanCreateNestedOneWithoutResultsInput
    bannedPlayer: BannedPlayerCreateNestedOneWithoutResultsInput
  }

  export type ScanResultUncheckedCreateInput = {
    id?: number
    scanId: number
    bannedPlayerId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUpdateInput = {
    games?: JsonNullValueInput | InputJsonValue
    scan?: ScanUpdateOneRequiredWithoutResultsNestedInput
    bannedPlayer?: BannedPlayerUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ScanResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: IntFieldUpdateOperationsInput | number
    bannedPlayerId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultCreateManyInput = {
    id?: number
    scanId: number
    bannedPlayerId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUpdateManyMutationInput = {
    games?: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: IntFieldUpdateOperationsInput | number
    bannedPlayerId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ScanResultListRelationFilter = {
    every?: ScanResultWhereInput
    some?: ScanResultWhereInput
    none?: ScanResultWhereInput
  }

  export type ScanResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScanCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    dateRange?: SortOrder
    scannedAt?: SortOrder
  }

  export type ScanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScanMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    dateRange?: SortOrder
    scannedAt?: SortOrder
  }

  export type ScanMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    dateRange?: SortOrder
    scannedAt?: SortOrder
  }

  export type ScanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BannedPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    firstDetected?: SortOrder
  }

  export type BannedPlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BannedPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    firstDetected?: SortOrder
  }

  export type BannedPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    profileUrl?: SortOrder
    firstDetected?: SortOrder
  }

  export type BannedPlayerSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScanScalarRelationFilter = {
    is?: ScanWhereInput
    isNot?: ScanWhereInput
  }

  export type BannedPlayerScalarRelationFilter = {
    is?: BannedPlayerWhereInput
    isNot?: BannedPlayerWhereInput
  }

  export type ScanResultCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
    games?: SortOrder
  }

  export type ScanResultAvgOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
  }

  export type ScanResultMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
  }

  export type ScanResultMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
  }

  export type ScanResultSumOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    bannedPlayerId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ScanResultCreateNestedManyWithoutScanInput = {
    create?: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput> | ScanResultCreateWithoutScanInput[] | ScanResultUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutScanInput | ScanResultCreateOrConnectWithoutScanInput[]
    createMany?: ScanResultCreateManyScanInputEnvelope
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
  }

  export type ScanResultUncheckedCreateNestedManyWithoutScanInput = {
    create?: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput> | ScanResultCreateWithoutScanInput[] | ScanResultUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutScanInput | ScanResultCreateOrConnectWithoutScanInput[]
    createMany?: ScanResultCreateManyScanInputEnvelope
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScanResultUpdateManyWithoutScanNestedInput = {
    create?: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput> | ScanResultCreateWithoutScanInput[] | ScanResultUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutScanInput | ScanResultCreateOrConnectWithoutScanInput[]
    upsert?: ScanResultUpsertWithWhereUniqueWithoutScanInput | ScanResultUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: ScanResultCreateManyScanInputEnvelope
    set?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    disconnect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    delete?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    update?: ScanResultUpdateWithWhereUniqueWithoutScanInput | ScanResultUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: ScanResultUpdateManyWithWhereWithoutScanInput | ScanResultUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScanResultUncheckedUpdateManyWithoutScanNestedInput = {
    create?: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput> | ScanResultCreateWithoutScanInput[] | ScanResultUncheckedCreateWithoutScanInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutScanInput | ScanResultCreateOrConnectWithoutScanInput[]
    upsert?: ScanResultUpsertWithWhereUniqueWithoutScanInput | ScanResultUpsertWithWhereUniqueWithoutScanInput[]
    createMany?: ScanResultCreateManyScanInputEnvelope
    set?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    disconnect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    delete?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    update?: ScanResultUpdateWithWhereUniqueWithoutScanInput | ScanResultUpdateWithWhereUniqueWithoutScanInput[]
    updateMany?: ScanResultUpdateManyWithWhereWithoutScanInput | ScanResultUpdateManyWithWhereWithoutScanInput[]
    deleteMany?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
  }

  export type ScanResultCreateNestedManyWithoutBannedPlayerInput = {
    create?: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput> | ScanResultCreateWithoutBannedPlayerInput[] | ScanResultUncheckedCreateWithoutBannedPlayerInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutBannedPlayerInput | ScanResultCreateOrConnectWithoutBannedPlayerInput[]
    createMany?: ScanResultCreateManyBannedPlayerInputEnvelope
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
  }

  export type ScanResultUncheckedCreateNestedManyWithoutBannedPlayerInput = {
    create?: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput> | ScanResultCreateWithoutBannedPlayerInput[] | ScanResultUncheckedCreateWithoutBannedPlayerInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutBannedPlayerInput | ScanResultCreateOrConnectWithoutBannedPlayerInput[]
    createMany?: ScanResultCreateManyBannedPlayerInputEnvelope
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
  }

  export type ScanResultUpdateManyWithoutBannedPlayerNestedInput = {
    create?: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput> | ScanResultCreateWithoutBannedPlayerInput[] | ScanResultUncheckedCreateWithoutBannedPlayerInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutBannedPlayerInput | ScanResultCreateOrConnectWithoutBannedPlayerInput[]
    upsert?: ScanResultUpsertWithWhereUniqueWithoutBannedPlayerInput | ScanResultUpsertWithWhereUniqueWithoutBannedPlayerInput[]
    createMany?: ScanResultCreateManyBannedPlayerInputEnvelope
    set?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    disconnect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    delete?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    update?: ScanResultUpdateWithWhereUniqueWithoutBannedPlayerInput | ScanResultUpdateWithWhereUniqueWithoutBannedPlayerInput[]
    updateMany?: ScanResultUpdateManyWithWhereWithoutBannedPlayerInput | ScanResultUpdateManyWithWhereWithoutBannedPlayerInput[]
    deleteMany?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
  }

  export type ScanResultUncheckedUpdateManyWithoutBannedPlayerNestedInput = {
    create?: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput> | ScanResultCreateWithoutBannedPlayerInput[] | ScanResultUncheckedCreateWithoutBannedPlayerInput[]
    connectOrCreate?: ScanResultCreateOrConnectWithoutBannedPlayerInput | ScanResultCreateOrConnectWithoutBannedPlayerInput[]
    upsert?: ScanResultUpsertWithWhereUniqueWithoutBannedPlayerInput | ScanResultUpsertWithWhereUniqueWithoutBannedPlayerInput[]
    createMany?: ScanResultCreateManyBannedPlayerInputEnvelope
    set?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    disconnect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    delete?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    connect?: ScanResultWhereUniqueInput | ScanResultWhereUniqueInput[]
    update?: ScanResultUpdateWithWhereUniqueWithoutBannedPlayerInput | ScanResultUpdateWithWhereUniqueWithoutBannedPlayerInput[]
    updateMany?: ScanResultUpdateManyWithWhereWithoutBannedPlayerInput | ScanResultUpdateManyWithWhereWithoutBannedPlayerInput[]
    deleteMany?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
  }

  export type ScanCreateNestedOneWithoutResultsInput = {
    create?: XOR<ScanCreateWithoutResultsInput, ScanUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ScanCreateOrConnectWithoutResultsInput
    connect?: ScanWhereUniqueInput
  }

  export type BannedPlayerCreateNestedOneWithoutResultsInput = {
    create?: XOR<BannedPlayerCreateWithoutResultsInput, BannedPlayerUncheckedCreateWithoutResultsInput>
    connectOrCreate?: BannedPlayerCreateOrConnectWithoutResultsInput
    connect?: BannedPlayerWhereUniqueInput
  }

  export type ScanUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ScanCreateWithoutResultsInput, ScanUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ScanCreateOrConnectWithoutResultsInput
    upsert?: ScanUpsertWithoutResultsInput
    connect?: ScanWhereUniqueInput
    update?: XOR<XOR<ScanUpdateToOneWithWhereWithoutResultsInput, ScanUpdateWithoutResultsInput>, ScanUncheckedUpdateWithoutResultsInput>
  }

  export type BannedPlayerUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<BannedPlayerCreateWithoutResultsInput, BannedPlayerUncheckedCreateWithoutResultsInput>
    connectOrCreate?: BannedPlayerCreateOrConnectWithoutResultsInput
    upsert?: BannedPlayerUpsertWithoutResultsInput
    connect?: BannedPlayerWhereUniqueInput
    update?: XOR<XOR<BannedPlayerUpdateToOneWithWhereWithoutResultsInput, BannedPlayerUpdateWithoutResultsInput>, BannedPlayerUncheckedUpdateWithoutResultsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScanResultCreateWithoutScanInput = {
    games: JsonNullValueInput | InputJsonValue
    bannedPlayer: BannedPlayerCreateNestedOneWithoutResultsInput
  }

  export type ScanResultUncheckedCreateWithoutScanInput = {
    id?: number
    bannedPlayerId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultCreateOrConnectWithoutScanInput = {
    where: ScanResultWhereUniqueInput
    create: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput>
  }

  export type ScanResultCreateManyScanInputEnvelope = {
    data: ScanResultCreateManyScanInput | ScanResultCreateManyScanInput[]
    skipDuplicates?: boolean
  }

  export type ScanResultUpsertWithWhereUniqueWithoutScanInput = {
    where: ScanResultWhereUniqueInput
    update: XOR<ScanResultUpdateWithoutScanInput, ScanResultUncheckedUpdateWithoutScanInput>
    create: XOR<ScanResultCreateWithoutScanInput, ScanResultUncheckedCreateWithoutScanInput>
  }

  export type ScanResultUpdateWithWhereUniqueWithoutScanInput = {
    where: ScanResultWhereUniqueInput
    data: XOR<ScanResultUpdateWithoutScanInput, ScanResultUncheckedUpdateWithoutScanInput>
  }

  export type ScanResultUpdateManyWithWhereWithoutScanInput = {
    where: ScanResultScalarWhereInput
    data: XOR<ScanResultUpdateManyMutationInput, ScanResultUncheckedUpdateManyWithoutScanInput>
  }

  export type ScanResultScalarWhereInput = {
    AND?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
    OR?: ScanResultScalarWhereInput[]
    NOT?: ScanResultScalarWhereInput | ScanResultScalarWhereInput[]
    id?: IntFilter<"ScanResult"> | number
    scanId?: IntFilter<"ScanResult"> | number
    bannedPlayerId?: IntFilter<"ScanResult"> | number
    games?: JsonFilter<"ScanResult">
  }

  export type ScanResultCreateWithoutBannedPlayerInput = {
    games: JsonNullValueInput | InputJsonValue
    scan: ScanCreateNestedOneWithoutResultsInput
  }

  export type ScanResultUncheckedCreateWithoutBannedPlayerInput = {
    id?: number
    scanId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultCreateOrConnectWithoutBannedPlayerInput = {
    where: ScanResultWhereUniqueInput
    create: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput>
  }

  export type ScanResultCreateManyBannedPlayerInputEnvelope = {
    data: ScanResultCreateManyBannedPlayerInput | ScanResultCreateManyBannedPlayerInput[]
    skipDuplicates?: boolean
  }

  export type ScanResultUpsertWithWhereUniqueWithoutBannedPlayerInput = {
    where: ScanResultWhereUniqueInput
    update: XOR<ScanResultUpdateWithoutBannedPlayerInput, ScanResultUncheckedUpdateWithoutBannedPlayerInput>
    create: XOR<ScanResultCreateWithoutBannedPlayerInput, ScanResultUncheckedCreateWithoutBannedPlayerInput>
  }

  export type ScanResultUpdateWithWhereUniqueWithoutBannedPlayerInput = {
    where: ScanResultWhereUniqueInput
    data: XOR<ScanResultUpdateWithoutBannedPlayerInput, ScanResultUncheckedUpdateWithoutBannedPlayerInput>
  }

  export type ScanResultUpdateManyWithWhereWithoutBannedPlayerInput = {
    where: ScanResultScalarWhereInput
    data: XOR<ScanResultUpdateManyMutationInput, ScanResultUncheckedUpdateManyWithoutBannedPlayerInput>
  }

  export type ScanCreateWithoutResultsInput = {
    username: string
    dateRange: string
    scannedAt?: Date | string
  }

  export type ScanUncheckedCreateWithoutResultsInput = {
    id?: number
    username: string
    dateRange: string
    scannedAt?: Date | string
  }

  export type ScanCreateOrConnectWithoutResultsInput = {
    where: ScanWhereUniqueInput
    create: XOR<ScanCreateWithoutResultsInput, ScanUncheckedCreateWithoutResultsInput>
  }

  export type BannedPlayerCreateWithoutResultsInput = {
    username: string
    profileUrl: string
    firstDetected?: Date | string
  }

  export type BannedPlayerUncheckedCreateWithoutResultsInput = {
    id?: number
    username: string
    profileUrl: string
    firstDetected?: Date | string
  }

  export type BannedPlayerCreateOrConnectWithoutResultsInput = {
    where: BannedPlayerWhereUniqueInput
    create: XOR<BannedPlayerCreateWithoutResultsInput, BannedPlayerUncheckedCreateWithoutResultsInput>
  }

  export type ScanUpsertWithoutResultsInput = {
    update: XOR<ScanUpdateWithoutResultsInput, ScanUncheckedUpdateWithoutResultsInput>
    create: XOR<ScanCreateWithoutResultsInput, ScanUncheckedCreateWithoutResultsInput>
    where?: ScanWhereInput
  }

  export type ScanUpdateToOneWithWhereWithoutResultsInput = {
    where?: ScanWhereInput
    data: XOR<ScanUpdateWithoutResultsInput, ScanUncheckedUpdateWithoutResultsInput>
  }

  export type ScanUpdateWithoutResultsInput = {
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    dateRange?: StringFieldUpdateOperationsInput | string
    scannedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannedPlayerUpsertWithoutResultsInput = {
    update: XOR<BannedPlayerUpdateWithoutResultsInput, BannedPlayerUncheckedUpdateWithoutResultsInput>
    create: XOR<BannedPlayerCreateWithoutResultsInput, BannedPlayerUncheckedCreateWithoutResultsInput>
    where?: BannedPlayerWhereInput
  }

  export type BannedPlayerUpdateToOneWithWhereWithoutResultsInput = {
    where?: BannedPlayerWhereInput
    data: XOR<BannedPlayerUpdateWithoutResultsInput, BannedPlayerUncheckedUpdateWithoutResultsInput>
  }

  export type BannedPlayerUpdateWithoutResultsInput = {
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannedPlayerUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    firstDetected?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanResultCreateManyScanInput = {
    id?: number
    bannedPlayerId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUpdateWithoutScanInput = {
    games?: JsonNullValueInput | InputJsonValue
    bannedPlayer?: BannedPlayerUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ScanResultUncheckedUpdateWithoutScanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bannedPlayerId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUncheckedUpdateManyWithoutScanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bannedPlayerId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultCreateManyBannedPlayerInput = {
    id?: number
    scanId: number
    games: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUpdateWithoutBannedPlayerInput = {
    games?: JsonNullValueInput | InputJsonValue
    scan?: ScanUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ScanResultUncheckedUpdateWithoutBannedPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }

  export type ScanResultUncheckedUpdateManyWithoutBannedPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: IntFieldUpdateOperationsInput | number
    games?: JsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}