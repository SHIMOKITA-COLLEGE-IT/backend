import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RootsNameRootsTypeCompoundUniqueInput } from './roots-name-roots-type-compound-unique.input';

@InputType()
export class RootsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RootsNameRootsTypeCompoundUniqueInput, {nullable:true})
    name_rootsType?: RootsNameRootsTypeCompoundUniqueInput;
}
