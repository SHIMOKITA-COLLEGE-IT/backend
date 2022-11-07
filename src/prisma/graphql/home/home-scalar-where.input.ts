import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeScalarWhereInput {

    @Field(() => [HomeScalarWhereInput], {nullable:true})
    AND?: Array<HomeScalarWhereInput>;

    @Field(() => [HomeScalarWhereInput], {nullable:true})
    OR?: Array<HomeScalarWhereInput>;

    @Field(() => [HomeScalarWhereInput], {nullable:true})
    NOT?: Array<HomeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
