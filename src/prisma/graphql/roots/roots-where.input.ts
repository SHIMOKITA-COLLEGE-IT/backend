import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRootsTypeFilter } from '../prisma/enum-roots-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { MyRootsListRelationFilter } from '../my-roots/my-roots-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RootsWhereInput {

    @Field(() => [RootsWhereInput], {nullable:true})
    AND?: Array<RootsWhereInput>;

    @Field(() => [RootsWhereInput], {nullable:true})
    OR?: Array<RootsWhereInput>;

    @Field(() => [RootsWhereInput], {nullable:true})
    NOT?: Array<RootsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumRootsTypeFilter, {nullable:true})
    rootsType?: EnumRootsTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleMapUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    introductionUrl?: StringNullableFilter;

    @Field(() => MyRootsListRelationFilter, {nullable:true})
    myRoots?: MyRootsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
