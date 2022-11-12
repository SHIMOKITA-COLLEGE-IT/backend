import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserRootsTracingScalarWhereInput {

    @Field(() => [UserRootsTracingScalarWhereInput], {nullable:true})
    AND?: Array<UserRootsTracingScalarWhereInput>;

    @Field(() => [UserRootsTracingScalarWhereInput], {nullable:true})
    OR?: Array<UserRootsTracingScalarWhereInput>;

    @Field(() => [UserRootsTracingScalarWhereInput], {nullable:true})
    NOT?: Array<UserRootsTracingScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rootsId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;
}
