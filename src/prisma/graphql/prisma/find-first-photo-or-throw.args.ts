import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotoWhereInput } from '../photo/photo-where.input';
import { Type } from 'class-transformer';
import { PhotoOrderByWithRelationInput } from '../photo/photo-order-by-with-relation.input';
import { PhotoWhereUniqueInput } from '../photo/photo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PhotoScalarFieldEnum } from '../photo/photo-scalar-field.enum';

@ArgsType()
export class FindFirstPhotoOrThrowArgs {

    @Field(() => PhotoWhereInput, {nullable:true})
    @Type(() => PhotoWhereInput)
    where?: PhotoWhereInput;

    @Field(() => [PhotoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PhotoOrderByWithRelationInput>;

    @Field(() => PhotoWhereUniqueInput, {nullable:true})
    cursor?: PhotoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PhotoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PhotoScalarFieldEnum>;
}
