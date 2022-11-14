import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGenerationTypeFilter } from '../prisma/enum-generation-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class GenerationWhereInput {

    @Field(() => [GenerationWhereInput], {nullable:true})
    AND?: Array<GenerationWhereInput>;

    @Field(() => [GenerationWhereInput], {nullable:true})
    OR?: Array<GenerationWhereInput>;

    @Field(() => [GenerationWhereInput], {nullable:true})
    NOT?: Array<GenerationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumGenerationTypeFilter, {nullable:true})
    generationType?: EnumGenerationTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    from?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    to?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    emoji?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    hexColor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slackChannel?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    photoUrls?: StringNullableListFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
