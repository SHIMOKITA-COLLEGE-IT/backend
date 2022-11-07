import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PhotoScalarWhereInput {

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    AND?: Array<PhotoScalarWhereInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    OR?: Array<PhotoScalarWhereInput>;

    @Field(() => [PhotoScalarWhereInput], {nullable:true})
    NOT?: Array<PhotoScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    alt?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
