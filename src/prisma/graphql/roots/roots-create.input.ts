import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { MyRootsCreateNestedManyWithoutRootsInput } from '../my-roots/my-roots-create-nested-many-without-roots.input';

@InputType()
export class RootsCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl?: string;

    @Field(() => String, {nullable:true})
    introductionUrl?: string;

    @Field(() => MyRootsCreateNestedManyWithoutRootsInput, {nullable:true})
    myRoots?: MyRootsCreateNestedManyWithoutRootsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
