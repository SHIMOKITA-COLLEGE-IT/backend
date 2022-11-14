import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationWhereInput } from './generation-where.input';
import { Type } from 'class-transformer';
import { GenerationOrderByWithRelationInput } from './generation-order-by-with-relation.input';
import { GenerationWhereUniqueInput } from './generation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenerationScalarFieldEnum } from './generation-scalar-field.enum';

@ArgsType()
export class FindFirstGenerationArgs {

    @Field(() => GenerationWhereInput, {nullable:true})
    @Type(() => GenerationWhereInput)
    where?: GenerationWhereInput;

    @Field(() => [GenerationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenerationOrderByWithRelationInput>;

    @Field(() => GenerationWhereUniqueInput, {nullable:true})
    cursor?: GenerationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GenerationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GenerationScalarFieldEnum>;
}
