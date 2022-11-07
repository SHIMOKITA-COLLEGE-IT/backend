import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class MyRootsScalarWhereInput {

    @Field(() => [MyRootsScalarWhereInput], {nullable:true})
    AND?: Array<MyRootsScalarWhereInput>;

    @Field(() => [MyRootsScalarWhereInput], {nullable:true})
    OR?: Array<MyRootsScalarWhereInput>;

    @Field(() => [MyRootsScalarWhereInput], {nullable:true})
    NOT?: Array<MyRootsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rootsId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;
}
