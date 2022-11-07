import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProfileScalarWhereInput {

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    AND?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    OR?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickName?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    showOnlyNickname?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    birthday?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    hideAge?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    position?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
